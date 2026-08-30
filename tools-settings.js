// ====== الوضع الليلي الفوري لكل الأدوات ======

(function() {
    var savedMode = localStorage.getItem('mode') || 'auto';
    var isDark = savedMode === 'dark' || (savedMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
        document.documentElement.classList.add('dark-mode');
    }
    
    var style = document.createElement('style');
    style.textContent = `
        html.dark-mode body {
            background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 50%, #1a1a2e 100%) !important;
        }
        html.dark-mode .glass-header,
        html.dark-mode .tool-card,
        html.dark-mode .info-card {
            background: rgba(0,0,0,0.5) !important;
            border-color: rgba(255,255,255,0.1) !important;
        }
        html.dark-mode .result {
            background: rgba(30,30,46,0.95) !important;
            color: #e0e0e0 !important;
        }
        html.dark-mode .result p {
            color: #93c5fd !important;
        }
        html.dark-mode input,
        html.dark-mode select,
        html.dark-mode textarea {
            background: rgba(0,0,0,0.4) !important;
            color: white !important;
            border-color: rgba(255,255,255,0.2) !important;
        }
    `;
    document.head.appendChild(style);
})();