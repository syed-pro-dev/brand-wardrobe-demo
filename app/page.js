'use client';

import React, { useState } from 'react';
import { ShoppingBag, X, MessageCircle, Flame, Star, ShieldCheck, Truck, ChevronRight } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Winter Fleece Boys Tracksuit",
    category: "Boys",
    originalPrice: 2800,
    price: 2380,
    tag: "15% OFF",
    sizes: ["2-3 Y", "4-5 Y", "6-7 Y", "8-9 Y", "10-12 Y"],
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=80",
    description: "Premium export quality warm fleece fabric for kids."
  },
  {
    id: 2,
    name: "Cozy Girls Embroidered Tracksuit",
    category: "Girls",
    originalPrice: 2950,
    price: 2507,
    tag: "Best Seller",
    sizes: ["2-3 Y", "4-5 Y", "6-7 Y", "8-9 Y", "10-12 Y"],
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=700&q=80",
    description: "Soft inner fleece with stylish winter design."
  },
  {
    id: 3,
    name: "Heavy Duty 6-Pocket Cargo Pants",
    category: "Pants",
    originalPrice: 2200,
    price: 1870,
    tag: "Trending",
    sizes: ["4-5 Y", "6-7 Y", "8-9 Y", "10-12 Y"],
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=700&q=80",
    description: "Comfort stretch fabric with stylish deep pockets."
  },
  {
    id: 4,
    name: "Signature 8-Pocket Tactical Cargo",
    category: "Pants",
    originalPrice: 2400,
    price: 2040,
    tag: "Limited Stock",
    sizes: ["4-5 Y", "6-7 Y", "8-9 Y", "10-12 Y"],
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80",
    description: "Durable military finish for active outdoor kids."
  },
  {
    id: 5,
    name: "Urban Baggy Fit Casual Pants",
    category: "Pants",
    originalPrice: 1999,
    price: 1699,
    tag: "Hot Drop",
    sizes: ["2-3 Y", "4-5 Y", "6-7 Y", "8-9 Y"],
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=700&q=80",
    description: "Modern street baggy cut, relaxed waistband."
  },
  {
    id: 6,
    name: "Athletic Zip-Up Kids Tracksuit",
    category: "Boys",
    originalPrice: 3100,
    price: 2635,
    tag: "15% OFF",
    sizes: ["4-5 Y", "6-7 Y", "8-9 Y", "10-12 Y"],
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80",
    description: "Breathable warmth with sturdy front zipper."
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSelectSize = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const addToCart = (product) => {
    const size = selectedSizes[product.id] || product.sizes[0];
    const existingIndex = cart.findIndex(item => item.id === product.id && item.size === size);

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].qty += 1;
      setCart(updated);
    } else {
      setCart([...cart, { ...product, size, qty: 1 }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const filteredProducts = selectedCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;
    
    let message = `*Assalam-o-Alaikum!*\nI want to place an order from your website:\n\n`;
    cart.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}*\n   • Size: ${item.size}\n   • Qty: ${item.qty}\n   • Price: Rs. ${item.price * item.qty}\n\n`;
    });
    message += `💰 *Total Amount:* Rs. ${cartTotal}\n\nPlease share delivery details and dispatch timeline.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923054353062?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-rose-600 via-amber-600 to-rose-600 text-white text-xs sm:text-sm font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 animate-bounce" />
        <span>SPECIAL WINTER LAUNCH: Flat 15% OFF on All Articles!</span>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500 animate-ping"></span>
              <h1 className="font-black text-xl tracking-tight text-slate-900 uppercase">
                Brand&apos;s Wardrobe
              </h1>
            </div>
            <p className="text-[11px] font-medium text-amber-600 uppercase tracking-widest">Kids Corner</p>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://whatsapp.com/channel/0029Vb5ZMP3AInPmccS3623E"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs bg-emerald-50 text-emerald-700 border border-emerald-300 px-3 py-1.5 rounded-full font-medium hover:bg-emerald-100 transition"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              WhatsApp Channel
            </a>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative bg-slate-900 text-white p-2.5 rounded-xl hover:bg-slate-800 transition flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-bold hidden sm:inline">Bag</span>
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white">
                  {cart.reduce((a, b) => a + b.qty, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Showcase */}
      <section className="bg-gradient-to-b from-amber-50/70 to-slate-50 py-10 px-4 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> Official Winter Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Trending Outfits for Kids
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Export quality tracksuits, baggy fits, and multi-pocket cargo pants. Designed for comfort, durability, and bold street style.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              <Truck className="w-4 h-4 text-emerald-600" /> Cash on Delivery Available
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600" /> 100% Quality Checked
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-extrabold text-slate-900 text-lg">Shop Catalog</h3>
          <span className="text-xs text-slate-500 font-medium">{filteredProducts.length} Articles</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {["All", "Boys", "Girls", "Pants"].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat 
                  ? "bg-slate-900 text-white shadow-md shadow-slate-200" 
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat === "All" ? "All Outfits" : cat === "Pants" ? "Cargo & Baggy Pants" : `${cat} Tracksuits`}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <main className="max-w-6xl mx-auto px-4 py-6 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => {
            const currentSize = selectedSizes[product.id] || product.sizes[0];

            return (
              <div 
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition duration-500" 
                    />
                    <span className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                      {product.tag}
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">{product.category}</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs line-through text-slate-400">Rs. {product.originalPrice}</span>
                        <span className="text-base font-extrabold text-slate-900">Rs. {product.price}</span>
                      </div>
                    </div>

                    <h4 className="font-bold text-slate-800 text-base leading-snug mb-1">{product.name}</h4>
                    <p className="text-xs text-slate-500 mb-3">{product.description}</p>

                    {/* Size Selector */}
                    <div>
                      <span className="text-[11px] font-bold text-slate-700 block mb-1.5">Select Size:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.sizes.map(size => (
                          <button
                            key={size}
                            onClick={() => handleSelectSize(product.id, size)}
                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition ${
                              currentSize === size
                                ? "bg-amber-500 border-amber-500 text-white shadow-sm"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-2 shadow"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Add To Bag ({currentSize})
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-slate-900" />
                <h3 className="font-bold text-slate-900">Your Shopping Bag ({cart.length})</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400">
                  <ShoppingBag className="w-12 h-12 stroke-[1.5] mb-2" />
                  <p className="text-sm font-medium">Your bag is empty</p>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="flex gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h5 className="font-bold text-xs text-slate-800 line-clamp-1">{item.name}</h5>
                      <p className="text-[11px] text-slate-500 font-medium">Size: <span className="text-amber-700 font-bold">{item.size}</span></p>
                      <p className="text-xs font-bold text-slate-900 mt-1">Rs. {item.price} x {item.qty}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="text-slate-400 hover:text-rose-500 self-start p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
                <div className="flex justify-between text-sm font-semibold">
                  <span>Subtotal:</span>
                  <span className="font-extrabold text-slate-900">Rs. {cartTotal}</span>
                </div>
                <button
                  onClick={checkoutWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 text-sm transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" /> Complete Order on WhatsApp
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  Instant order confirmation with size details via WhatsApp
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10 px-4 mt-12 border-t border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-black text-lg tracking-wider text-amber-400">BRAND&apos;S WARDROBE KIDS CORNER</h4>
            <p className="text-xs text-slate-400 mt-1">
              Direct Contact & Orders: +92 305 4353062
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://whatsapp.com/channel/0029Vb5ZMP3AInPmccS3623E"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
            >
              Join WhatsApp Channel <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
      }
        
