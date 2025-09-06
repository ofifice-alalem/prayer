// Sidebar Navigation Component
function createSidebar() {
    const sidebarHTML = `
        <!-- Sidebar Overlay -->
        <div id="sidebar-overlay" class="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40 transition-opacity duration-300 opacity-0 pointer-events-none" onclick="toggleSidebar()"></div>
        <!-- Sidebar -->
        <div id="sidebar" class="fixed top-0 right-0 h-screen w-96 bg-gradient-to-b from-white to-gray-50 shadow-2xl z-50 border-l border-gray-200 overflow-y-auto scrollbar-hide transform transition-transform duration-300" style="scrollbar-width: none; -ms-overflow-style: none;">
            <style>
                @media (max-width: 500px) {
                    #sidebar { width: 100% !important; }
                }
            </style>
            <div class="flex flex-col h-full">
                <!-- Sidebar Header -->
                <div class="flex items-center justify-between p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                            <span class="text-lg">🏠</span>
                        </div>
                        <h2 class="text-sm font-bold">القائمة الرئيسية</h2>
                    </div>
                    <button onclick="closeSidebar()" class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all">
                        <span class="text-xl font-bold">←</span>
                    </button>
                </div>

                <!-- Navigation Links -->
                <nav class="flex-1 p-6">
                    <div class="space-y-2">
                        <a href="prayer-dashboard.html" onclick="closeSidebar()" class="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200 group border border-blue-200 hover:border-blue-300 hover:shadow-md">
                            <div class="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <span class="text-white text-xs">📊</span>
                            </div>
                            <div class="flex-1">
                                <div class="font-bold text-gray-800 group-hover:text-blue-700">اللوحة اليومية</div>
                                <div class="text-sm text-gray-500 group-hover:text-blue-600">تتبع صلواتك اليومية</div>
                            </div>
                        </a>

                        <a href="monthly-report.html" onclick="closeSidebar()" class="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 transition-all duration-200 group border border-green-200 hover:border-green-300 hover:shadow-md">
                            <div class="w-9 h-9 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <span class="text-white text-xs">📅</span>
                            </div>
                            <div class="flex-1">
                                <div class="font-bold text-gray-800 group-hover:text-green-700">التقرير الشهري</div>
                                <div class="text-sm text-gray-500 group-hover:text-green-600">عرض إحصائيات الشهر</div>
                            </div>
                        </a>

                        <a href="table-view.html" onclick="closeSidebar()" class="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all duration-200 group border border-purple-200 hover:border-purple-300 hover:shadow-md">
                            <div class="w-9 h-9 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <span class="text-white text-xs">📋</span>
                            </div>
                            <div class="flex-1">
                                <div class="font-bold text-gray-800 group-hover:text-purple-700">العرض الجدولي</div>
                                <div class="text-sm text-gray-500 group-hover:text-purple-600">جدول تفصيلي للصلوات</div>
                            </div>
                        </a>

                        <a href="missed-rakaat-summary.html" onclick="closeSidebar()" class="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-200 group border border-orange-200 hover:border-orange-300 hover:shadow-md">
                            <div class="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <span class="text-white text-xs">⚠️</span>
                            </div>
                            <div class="flex-1">
                                <div class="font-bold text-gray-800 group-hover:text-orange-700">الركعات الفائتة</div>
                                <div class="text-sm text-gray-500 group-hover:text-orange-600">ملخص الركعات المفقودة</div>
                            </div>
                        </a>

                        <a href="missed-prayers-summary.html" onclick="closeSidebar()" class="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200 group border border-red-200 hover:border-red-300 hover:shadow-md">
                            <div class="w-9 h-9 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <span class="text-white text-xs">❌</span>
                            </div>
                            <div class="flex-1">
                                <div class="font-bold text-gray-800 group-hover:text-red-700">الصلوات المفقودة</div>
                                <div class="text-sm text-gray-500 group-hover:text-red-600">الصلوات غير المسجلة</div>
                            </div>
                        </a>
                    </div>

                    <!-- Export Section -->
                    <div class="mt-6 pt-6 border-t border-gray-200">
                        <h3 class="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                            <span class="text-lg">💾</span>
                            التصدير والاستيراد
                        </h3>
                        <div class="space-y-2">
                            <button onclick="exportToJSON()" class="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200 group border border-gray-200 hover:border-gray-300 hover:shadow-md text-right">
                                <div class="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                    <span class="text-white text-xs">📄</span>
                                </div>
                                <span class="font-bold text-gray-700 group-hover:text-gray-800">تصدير JSON</span>
                            </button>
                        </div>
                    </div>
                </nav>

                <!-- User Section -->
                <div class="p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
                    <div class="flex items-center gap-3 mb-4 p-2 bg-white rounded-xl shadow-sm">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm shadow-lg overflow-hidden" id="sidebar-user-avatar"></div>
                        <div class="flex-1">
                            <div class="font-bold text-gray-800" id="sidebar-user-name"></div>
                            <div class="text-sm text-gray-500">المستخدم الحالي</div>
                        </div>
                    </div>
                    <button onclick="changeUser()" class="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105">
                        🔄 تغيير المستخدم
                    </button>
                </div>
            </div>
        </div>
    `;

    // Insert sidebar HTML into body
    document.body.insertAdjacentHTML('beforeend', sidebarHTML);

    // Initialize sidebar functionality
    initializeSidebar();
}

function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    // Check if sidebar should be hidden by default
    const sidebarState = localStorage.getItem('sidebarOpen');
    if (sidebarState === 'false') {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
    }
    loadSidebarUserInfo();
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const isOpen = !sidebar.classList.contains('translate-x-full');
    
    if (isOpen) {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        localStorage.setItem('sidebarOpen', 'false');
    } else {
        sidebar.classList.remove('translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        localStorage.setItem('sidebarOpen', 'true');
    }
}

function loadSidebarUserInfo() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const profile = localStorage.getItem(`user_${currentUser}`);
        if (profile) {
            const userProfile = JSON.parse(profile);
            document.getElementById('sidebar-user-name').textContent = userProfile.username;
            const avatarEl = document.getElementById('sidebar-user-avatar');
            // Clear existing content
            avatarEl.innerHTML = '';
            // If avatar is an image URL, show image
            if (userProfile.avatar && userProfile.avatar.startsWith && userProfile.avatar.startsWith('http')) {
                const img = document.createElement('img');
                img.src = userProfile.avatar;
                img.alt = userProfile.username || 'user';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                avatarEl.appendChild(img);
            } else if (userProfile.avatar && userProfile.avatar.length > 0) {
                // Emoji or text avatar
                avatarEl.textContent = userProfile.avatar;
                avatarEl.classList.add('text-sm');
            } else if (userProfile.username && userProfile.username.length > 0) {
                // Fallback: first letter
                avatarEl.textContent = userProfile.username.trim().charAt(0).toUpperCase();
                avatarEl.classList.add('text-sm', 'font-semibold', 'text-white');
            }

            // Apply background color class safely (avoid unsafe class names)
            if (userProfile.color) {
                // Expecting color like 'red' or 'blue' — apply as bg-{color}-500
                avatarEl.classList.add('bg-' + userProfile.color + '-500');
            } else {
                avatarEl.classList.add('bg-gray-400');
            }
        }
    }
}

// Export function (will be overridden by individual pages if they have their own)
function exportToJSON() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return;
    
    const profile = JSON.parse(localStorage.getItem(`user_${currentUser}`) || '{}');
    const now = new Date();
    
    const userData = {
        username: profile.username,
        exportDate: now.toISOString(),
        prayerData: {}
    };
    
    for (let key in localStorage) {
        if (key.startsWith(`prayers_${currentUser}_`)) {
            userData.prayerData[key] = JSON.parse(localStorage.getItem(key));
        }
    }
    
    const jsonData = JSON.stringify(userData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `بيانات_الصلاة_${profile.username}_${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}.json`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    localStorage.setItem('sidebarOpen', 'false');
}

function changeUser() {
    localStorage.removeItem('currentUser');
    window.location.href = 'user-select.html';
}

// Initialize sidebar when DOM is loaded
document.addEventListener('DOMContentLoaded', createSidebar);