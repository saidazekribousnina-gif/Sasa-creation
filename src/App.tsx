import { useState, useCallback, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import type { Product } from './i18n/types'
import { getSafeStorage, loadCart, saveCart } from './lib/cartStorage'
import {
  getSafeWishlistStorage,
  loadWishlist,
  saveWishlist,
  toggleWishlistItem,
} from './lib/wishlist'
import type { WishlistItem } from './lib/wishlist'
import { hapticFeedback } from './lib/haptics'
import { trackEvent } from './lib/analytics'
import { trackMetaEvent } from './lib/metaPixel'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function App() {
  // État panier — source unique, partagé entre toutes les pages
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storage = getSafeStorage()
    return storage ? loadCart(storage) : []
  })

  // État wishlist — source unique, partagée entre toutes les pages
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    const storage = getSafeWishlistStorage()
    return storage ? loadWishlist(storage) : []
  })

  useEffect(() => {
    const storage = getSafeStorage()
    if (storage) saveCart(storage, cartItems)
  }, [cartItems])

  useEffect(() => {
    const storage = getSafeWishlistStorage()
    if (storage) saveWishlist(storage, wishlist)
  }, [wishlist])

  const handleToggleWishlist = useCallback((product: Product) => {
    setWishlist((prev) => {
      const { items, added } = toggleWishlistItem(prev, {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
      })
      if (added) {
        hapticFeedback(15)
        trackEvent('add_to_wishlist', {
          product_id: product.id,
          price: product.price,
        })
      }
      return items
    })
  }, [])

  const handleAddToCart = useCallback((product: Product, source: string = 'grid') => {
    hapticFeedback(10)
    trackEvent('add_to_cart', {
      product_id: product.id,
      price: product.price,
      one_of_a_kind: product.isOneOfAKind,
      source,
    })
    trackMetaEvent('AddToCart', {
      content_name: product.name,
      content_ids: [`SASA-${product.id}`],
      content_type: 'product',
      value: product.price,
      currency: 'TND',
    })
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        },
      ]
    })
  }, [])

  const handleRemoveFromCart = useCallback((id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }, [])

  const handleUpdateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      )
    }
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        }
      />
      <Route
        path="/produit/:slug"
        element={
          <ProductPage
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        }
      />
      <Route
        path="*"
        element={
          <Home
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        }
      />
    </Routes>
  )
}
