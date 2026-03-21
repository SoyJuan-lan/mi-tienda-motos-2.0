// ============================================
// TRADUCCIONES - ESPAÑOL E INGLÉS
// ============================================
const translations = {
    es: {
        nav: {
            home: 'Inicio',
            motorcycles: 'Motocicletas',
            parts: 'Repuestos',
            accessories: 'Accesorios',
            login: 'Iniciar Sesión',
            logout: 'Cerrar Sesión'
        },
        hero: {
            title: 'Tu Destino para Motos y Repuestos',
            subtitle: 'Descubre las mejores motocicletas y partes premium',
            cta: 'Ver Catálogo'
        },
        filters: {
            title: 'Filtros',
            category: 'Categoría',
            all: 'Todo',
            motorcycles: 'Motocicletas',
            parts: 'Repuestos',
            accessories: 'Accesorios',
            brand: 'Marca',
            priceRange: 'Rango de Precio',
            search: 'Buscar productos'
        },
        products: {
            addToCart: 'Agregar al Carrito',
            inStock: 'En Stock',
            outOfStock: 'Agotado'
        },
        cart: {
            title: 'Carrito de Compras',
            empty: 'Tu carrito está vacío',
            total: 'Total',
            checkout: 'Proceder al Pago',
            continueShopping: 'Continuar Comprando',
            remove: 'Eliminar'
        },
        auth: {
            loginTitle: 'Iniciar Sesión',
            registerTitle: 'Crear Cuenta',
            email: 'Correo Electrónico',
            password: 'Contraseña',
            name: 'Nombre Completo',
            login: 'Entrar',
            register: 'Registrarse',
            haveAccount: '¿Ya tienes cuenta?',
            noAccount: '¿No tienes cuenta?',
            loginHere: 'Inicia sesión aquí',
            registerHere: 'Regístrate aquí'
        },
        messages: {
            loginSuccess: '¡Bienvenido!',
            registerSuccess: '¡Cuenta creada exitosamente!',
            addedToCart: 'Producto agregado al carrito',
            checkoutSuccess: '¡Compra realizada con éxito! Total: $',
            emptyCart: 'Tu carrito está vacío'
        }
    },
    en: {
        nav: {
            home: 'Home',
            motorcycles: 'Motorcycles',
            parts: 'Parts',
            accessories: 'Accessories',
            login: 'Login',
            logout: 'Logout'
        },
        hero: {
            title: 'Your Destination for Bikes and Parts',
            subtitle: 'Discover the best motorcycles and premium parts',
            cta: 'View Catalog'
        },
        filters: {
            title: 'Filters',
            category: 'Category',
            all: 'All',
            motorcycles: 'Motorcycles',
            parts: 'Parts',
            accessories: 'Accessories',
            brand: 'Brand',
            priceRange: 'Price Range',
            search: 'Search products'
        },
        products: {
            addToCart: 'Add to Cart',
            inStock: 'In Stock',
            outOfStock: 'Out of Stock'
        },
        cart: {
            title: 'Shopping Cart',
            empty: 'Your cart is empty',
            total: 'Total',
            checkout: 'Proceed to Checkout',
            continueShopping: 'Continue Shopping',
            remove: 'Remove'
        },
        auth: {
            loginTitle: 'Login',
            registerTitle: 'Create Account',
            email: 'Email',
            password: 'Password',
            name: 'Full Name',
            login: 'Login',
            register: 'Register',
            haveAccount: 'Already have an account?',
            noAccount: "Don't have an account?",
            loginHere: 'Login here',
            registerHere: 'Register here'
        },
        messages: {
            loginSuccess: 'Welcome!',
            registerSuccess: 'Account created successfully!',
            addedToCart: 'Product added to cart',
            checkoutSuccess: 'Purchase completed successfully! Total: $',
            emptyCart: 'Your cart is empty'
        }
    }
};

// ============================================
// BASE DE DATOS DE PRODUCTOS
// ============================================
const products = [
    {
        id: 1,
        name: 'Yamaha R6',
        category: 'motorcycles',
        brand: 'Yamaha',
        price: 12500,
        image: 'https://images.unsplash.com/photo-1558981033-6f23c83fe2c9?w=400',
        stock: 5,
        description: '600cc Sport Bike'
    },
    {
        id: 2,
        name: 'Honda CBR1000RR',
        category: 'motorcycles',
        brand: 'Honda',
        price: 18900,
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400',
        stock: 3,
        description: '1000cc Racing Machine'
    },
    {
        id: 3,
        name: 'Kawasaki Ninja ZX-6R',
        category: 'motorcycles',
        brand: 'Kawasaki',
        price: 11200,
        image: 'https://images.unsplash.com/photo-1591768575494-2ae4ae2a6b0b?w=400',
        stock: 7,
        description: '636cc Sport Performance'
    },
    {
        id: 4,
        name: 'Ducati Panigale V4',
        category: 'motorcycles',
        brand: 'Ducati',
        price: 28500,
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400',
        stock: 2,
        description: 'Italian Racing Excellence'
    },
    {
        id: 5,
        name: 'Suzuki GSX-R750',
        category: 'motorcycles',
        brand: 'Suzuki',
        price: 13800,
        image: 'https://images.unsplash.com/photo-1568772678584-489ea37605c2?w=400',
        stock: 4,
        description: '750cc Performance Beast'
    },
    {
        id: 6,
        name: 'BMW S1000RR',
        category: 'motorcycles',
        brand: 'BMW',
        price: 19500,
        image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=400',
        stock: 3,
        description: 'German Engineering Power'
    },
    {
        id: 7,
        name: 'Helmet AGV Pista GP',
        category: 'accessories',
        brand: 'AGV',
        price: 899,
        image: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=400',
        stock: 15,
        description: 'Racing Full-Face Helmet'
    },
    {
        id: 8,
        name: 'Alpinestars Racing Suit',
        category: 'accessories',
        brand: 'Alpinestars',
        price: 1250,
        image: 'https://images.unsplash.com/photo-1592207810192-447375fc3d89?w=400',
        stock: 8,
        description: 'Professional Leather Suit'
    },
    {
        id: 9,
        name: 'Akrapovic Exhaust',
        category: 'parts',
        brand: 'Akrapovic',
        price: 1850,
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400',
        stock: 12,
        description: 'Titanium Full System'
    },
    {
        id: 10,
        name: 'Brembo Brake Kit',
        category: 'parts',
        brand: 'Brembo',
        price: 2200,
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
        stock: 10,
        description: 'Racing Brake System'
    },
    {
        id: 11,
        name: 'Öhlins Suspension',
        category: 'parts',
        brand: 'Öhlins',
        price: 3100,
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
        stock: 6,
        description: 'Premium Fork & Shock'
    },
    {
        id: 12,
        name: 'K&N Air Filter',
        category: 'parts',
        brand: 'K&N',
        price: 95,
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
        stock: 25,
        description: 'High-Flow Performance Filter'
    },
    {
        id: 13,
        name: 'Dainese Racing Gloves',
        category: 'accessories',
        brand: 'Dainese',
        price: 189,
        image: 'https://images.unsplash.com/photo-1605639424335-71a5c8c7834a?w=400',
        stock: 20,
        description: 'Carbon Fiber Protection'
    },
    {
        id: 14,
        name: 'Sena Bluetooth Headset',
        category: 'accessories',
        brand: 'Sena',
        price: 249,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
        stock: 18,
        description: 'Rider Communication System'
    },
    {
        id: 15,
        name: 'Michelin Power GP',
        category: 'parts',
        brand: 'Michelin',
        price: 420,
        image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400',
        stock: 30,
        description: 'Racing Tire Set'
    },
    {
        id: 16,
        name: 'TCX Racing Boots',
        category: 'accessories',
        brand: 'TCX',
        price: 349,
        image: 'https://images.unsplash.com/photo-1603217195146-0bb2d523e9e7?w=400',
        stock: 12,
        description: 'Professional Track Boots'
    }
];

// ============================================
// VARIABLES GLOBALES
// ============================================
let currentLanguage = 'es';
let currentUser = null;
let cart = [];
let registeredUsers = [];

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadBrands();
    updateTranslations();
});

// ============================================
// SISTEMA DE TRADUCCIÓN
// ============================================
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    updateTranslations();
    
    // Re-renderizar productos si están visibles
    const filtersSection = document.getElementById('filtersSection');
    if (filtersSection.style.display !== 'none') {
        applyFilters();
    }
}

function updateTranslations() {
    const t = translations[currentLanguage];
    
    // Traducir todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;
        
        // Navegar por el objeto de traducciones
        keys.forEach(k => {
            if (value) value = value[k];
        });
        
        if (value) {
            element.textContent = value;
        }
    });
}

// ============================================
// NAVEGACIÓN
// ============================================
function showHome() {
    document.getElementById('heroSection').style.display = 'block';
    document.getElementById('filtersSection').style.display = 'none';
    document.getElementById('productsGrid').innerHTML = '';
}

function showCatalog() {
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('filtersSection').style.display = 'block';
    applyFilters();
}

function filterByCategory(category) {
    showCatalog();
    document.getElementById('categoryFilter').value = category;
    applyFilters();
}

// ============================================
// SISTEMA DE FILTROS
// ============================================
function loadBrands() {
    const brands = [...new Set(products.map(p => p.brand))];
    const select = document.getElementById('brandFilter');
    select.innerHTML = '<option value="all">Todas / All</option>';
    
    brands.sort().forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        select.appendChild(option);
    });
}

function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const brand = document.getElementById('brandFilter').value;
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    
    // Actualizar display del precio
    document.getElementById('priceValue').textContent = maxPrice.toLocaleString();
    
    // Filtrar productos
    const filtered = products.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(searchTerm) || 
                          product.description.toLowerCase().includes(searchTerm) ||
                          product.brand.toLowerCase().includes(searchTerm);
        const matchCategory = category === 'all' || product.category === category;
        const matchBrand = brand === 'all' || product.brand === brand;
        const matchPrice = product.price <= maxPrice;
        
        return matchSearch && matchCategory && matchBrand && matchPrice;
    });
    
    displayProducts(filtered);
}

// ============================================
// MOSTRAR PRODUCTOS
// ============================================
function displayProducts(productList) {
    const grid = document.getElementById('productsGrid');
    const t = translations[currentLanguage];
    
    if (productList.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 3rem; color: #666; font-size: 1.2rem;">No se encontraron productos / No products found</p>';
        return;
    }
    
    grid.innerHTML = '';
    
    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const categoryTranslations = {
            'motorcycles': currentLanguage === 'es' ? 'Motocicletas' : 'Motorcycles',
            'parts': currentLanguage === 'es' ? 'Repuestos' : 'Parts',
            'accessories': currentLanguage === 'es' ? 'Accesorios' : 'Accessories'
        };
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <span class="product-category">${categoryTranslations[product.category]}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-brand">${product.brand}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toLocaleString()}</div>
                <p class="product-stock ${product.stock === 0 ? 'out' : ''}">
                    ${product.stock > 0 ? t.products.inStock + ': ' + product.stock : t.products.outOfStock}
                </p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                    ${t.products.addToCart}
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// ============================================
// SISTEMA DE CARRITO
// ============================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const t = translations[currentLanguage];
    
    if (!product || product.stock === 0) {
        alert(currentLanguage === 'es' ? 'Producto no disponible' : 'Product not available');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
        } else {
            alert(currentLanguage === 'es' ? 'Stock máximo alcanzado' : 'Maximum stock reached');
            return;
        }
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    alert(t.messages.addedToCart);
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function toggleCart() {
    displayCart();
    document.getElementById('cartModal').classList.add('active');
}

function displayCart() {
    const container = document.getElementById('cartItems');
    const t = translations[currentLanguage];
    
    if (cart.length === 0) {
        container.innerHTML = `<p class="empty-cart">${t.cart.empty}</p>`;
        document.getElementById('cartTotal').textContent = '0';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toLocaleString()}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span class="qty-display">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = total.toLocaleString();
}

function updateQuantity(productId, newQuantity) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    
    if (newQuantity === 0) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity > product.stock) {
        alert(currentLanguage === 'es' ? 'Stock máximo: ' + product.stock : 'Maximum stock: ' + product.stock);
        return;
    }
    
    if (cartItem) {
        cartItem.quantity = newQuantity;
        updateCartCount();
        displayCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    displayCart();
}

function checkout() {
    const t = translations[currentLanguage];
    
    if (cart.length === 0) {
        alert(t.messages.emptyCart);
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(t.messages.checkoutSuccess + total.toLocaleString());
    
    // Limpiar carrito
    cart = [];
    updateCartCount();
    displayCart();
    closeModal('cartModal');
}

// ============================================
// SISTEMA DE AUTENTICACIÓN
// ============================================
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('authModal').classList.add('active');
}

function switchToRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function switchToLogin() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function handleLogin(event) {
    event.preventDefault();
    const t = translations[currentLanguage];
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Buscar usuario
    const user = registeredUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        updateUserUI();
        closeModal('authModal');
        alert(t.messages.loginSuccess);
    } else {
        alert(currentLanguage === 'es' ? 'Usuario o contraseña incorrectos' : 'Incorrect email or password');
    }
}

function handleRegister(event) {
    event.preventDefault();
    const t = translations[currentLanguage];
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    
    // Verificar si el usuario ya existe
    if (registeredUsers.find(u => u.email === email)) {
        alert(currentLanguage === 'es' ? 'El correo ya está registrado' : 'Email already registered');
        return;
    }
    
    // Crear nuevo usuario
    const newUser = { name, email, password };
    registeredUsers.push(newUser);
    currentUser = newUser;
    
    updateUserUI();
    closeModal('authModal');
    alert(t.messages.registerSuccess);
}

function updateUserUI() {
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userMenu').style.display = 'flex';
        document.getElementById('loginBtn').style.display = 'none';
    } else {
        document.getElementById('userMenu').style.display = 'none';
        document.getElementById('loginBtn').style.display = 'block';
    }
}

function logout() {
    currentUser = null;
    updateUserUI();
    alert(currentLanguage === 'es' ? '¡Hasta pronto!' : 'See you soon!');
}

// ============================================
// SISTEMA DE MODALES
// ============================================
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}