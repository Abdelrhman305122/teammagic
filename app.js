// Agency Dashboard JavaScript

// Sample agency data
const agencies = [
    { id: 'AG-001', name: 'وكالة الرياض', members: 12, status: 'active' },
    { id: 'AG-002', name: 'وكالة جدة', members: 8, status: 'active' },
    { id: 'AG-003', name: 'وكالة الدمام', members: 5, status: 'inactive' },
    { id: 'AG-004', name: 'وكالة المدينة', members: 7, status: 'active' },
    { id: 'AG-005', name: 'وكالة مكة', members: 10, status: 'active' },
    { id: 'AG-006', name: 'وكالة تبوك', members: 3, status: 'inactive' }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on
    const currentPath = window.location.pathname;
    
    // Login page functionality
    if (currentPath.includes('login.html') || currentPath.includes('index.html')) {
        setupLoginPage();
    }
    
    // Registration page functionality
    else if (currentPath.includes('register.html')) {
        setupRegisterPage();
    }
    
    // Dashboard functionality
    else if (currentPath.includes('dashboard.html')) {
        setupDashboard();
    }
    
    // Add agency page functionality
    else if (currentPath.includes('add-agency.html')) {
        setupAddAgencyPage();
    }
});

// Login page setup
function setupLoginPage() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email-address').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (!email || !password) {
                alert('يرجى إدخال البريد الإلكتروني وكلمة المرور');
                return;
            }
            
            // In a real app, you would authenticate with a server here
            // For demo purposes, we'll just redirect to the dashboard
            window.location.href = 'dashboard.html';
        });
    }
}

// Registration page setup
function setupRegisterPage() {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('email-address').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Simple validation
            if (!fullName || !email || !password) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('كلمات المرور غير متطابقة');
                return;
            }
            
            // In a real app, you would register with a server here
            // For demo purposes, we'll just redirect to the login page
            alert('تم إنشاء الحساب بنجاح! يرجى تسجيل الدخول.');
            window.location.href = 'login.html';
        });
    }
}

// Dashboard setup
function setupDashboard() {
    // Add event listeners to action buttons
    const manageButtons = document.querySelectorAll('.btn-manage');
    const clearButtons = document.querySelectorAll('.btn-clear');
    const refillButtons = document.querySelectorAll('.btn-refill');
    
    manageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const agencyId = this.closest('tr').querySelector('td:first-child div').textContent;
            openManageModal(agencyId);
        });
    });
    
    clearButtons.forEach(button => {
        button.addEventListener('click', function() {
            const agencyId = this.closest('tr').querySelector('td:first-child div').textContent;
            if (confirm(`هل أنت متأكد من رغبتك في مسح بيانات الوكالة ${agencyId}؟`)) {
                clearAgencyData(agencyId);
            }
        });
    });
    
    refillButtons.forEach(button => {
        button.addEventListener('click', function() {
            const agencyId = this.closest('tr').querySelector('td:first-child div').textContent;
            openRefillModal(agencyId);
        });
    });
    
    // Search functionality
    const searchField = document.getElementById('search-field');
    if (searchField) {
        searchField.addEventListener('input', function() {
            filterAgencies(this.value);
        });
    }
    
    // Add agency button
    const addAgencyButton = document.querySelector('button:has(.fa-plus)');
    if (addAgencyButton) {
        addAgencyButton.addEventListener('click', function() {
            window.location.href = 'add-agency.html';
        });
    }
}

// Add agency page setup
function setupAddAgencyPage() {
    // Form handling is done in the page itself
}

// Functions
function openManageModal(agencyId) {
    alert(`فتح نافذة إدارة الوكالة ${agencyId}`);
    // In a real implementation, this would open a modal with agency management options
}

function clearAgencyData(agencyId) {
    alert(`تم مسح بيانات الوكالة ${agencyId}`);
    // In a real implementation, this would clear the agency data
}

function openRefillModal(agencyId) {
    alert(`فتح نافذة تعبئة بيانات الوكالة ${agencyId}`);
    // In a real implementation, this would open a modal for refilling agency data
}

function filterAgencies(searchTerm) {
    const rows = document.querySelectorAll('tbody tr');
    searchTerm = searchTerm.toLowerCase();
    
    rows.forEach(row => {
        const agencyId = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
        const agencyName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        
        if (agencyId.includes(searchTerm) || agencyName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}