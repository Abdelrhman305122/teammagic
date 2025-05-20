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
});

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