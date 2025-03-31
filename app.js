// 定义工具数据
const toolsData = [
    {
        category: "常用工具",
        icon: "fa-solid fa-toolbox",
        tools: [
            {
                name: "Similarweb",
                description: "网站流量分析和竞争对手研究工具",
                url: "https://www.similarweb.com/",
                icon: "fa-solid fa-chart-line"
            },
            {
                name: "Semrush",
                description: "综合性SEO和网络营销平台",
                url: "https://www.semrush.com/",
                icon: "fa-solid fa-magnifying-glass-chart"
            },
            {
                name: "Ahrefs",
                description: "专注SEO的反链分析和关键词研究工具",
                url: "https://ahrefs.com/",
                icon: "fa-solid fa-link"
            },
            {
                name: "AITDK",
                description: "网站分析与SEO优化浏览器扩展",
                url: "https://chromewebstore.google.com/detail/aitdk-seo-extension-%E6%B5%81%E9%87%8F%E5%85%B3%E9%94%AE%E8%AF%8D/hhfkpjffbhledfpkh",
                icon: "fa-solid fa-puzzle-piece"
            },
            {
                name: "Google Trends",
                description: "谷歌搜索词热度趋势分析工具",
                url: "https://trends.google.com/trends/",
                icon: "fa-brands fa-google"
            },
            {
                name: "Google Trending now",
                description: "谷歌实时热搜趋势",
                url: "https://trends.google.com/trending",
                icon: "fa-solid fa-fire"
            },
            {
                name: "searchsuggest.tips",
                description: "谷歌搜索下拉词收集工具",
                url: "searchsuggest.tips",
                icon: "fa-solid fa-keyboard"
            }
        ]
    },
    {
        category: "AI 编程",
        icon: "fa-solid fa-code",
        tools: [
            {
                name: "Cursor",
                description: "基于VSCode的AI编程助手",
                url: "https://www.cursor.com/cn",
                icon: "fa-solid fa-robot"
            },
            {
                name: "Windsurf",
                description: "AI驱动的代码生成工具",
                url: "https://codeium.com/windsurf",
                icon: "fa-solid fa-wind"
            },
            {
                name: "Bolt.new",
                description: "快速创建网页应用的简易平台",
                url: "https://bolt.new/",
                icon: "fa-solid fa-bolt"
            }
        ]
    },
    {
        category: "域名",
        icon: "fa-solid fa-globe",
        tools: [
            {
                name: "Spaceship",
                description: "支持支付宝的域名注册服务",
                url: "https://www.spaceship.com/",
                icon: "fa-solid fa-rocket"
            },
            {
                name: "Namecheap",
                description: "价格实惠的域名和主机服务",
                url: "www.namecheap.com",
                icon: "fa-solid fa-tags"
            },
            {
                name: "Godaddy",
                description: "全球最大的域名注册商",
                url: "https://www.godaddy.com/",
                icon: "fa-solid fa-landmark"
            },
            {
                name: "instantdomain<br>search",
                description: "即时域名可用性查询工具",
                url: "https://instantdomainsearch.com/",
                icon: "fa-solid fa-search"
            },
            {
                name: "Query.Domains",
                description: "批量域名检查器",
                url: "https://query.domains/",
                icon: "fa-solid fa-list-check"
            }
        ]
    },
    {
        category: "AI 工具",
        icon: "fa-solid fa-brain",
        tools: [
            {
                name: "Claude",
                description: "Anthropic开发的AI对话助手",
                url: "Claude.ai",
                icon: "fa-solid fa-comments"
            },
            {
                name: "ChatGPT",
                description: "OpenAI的大型语言模型",
                url: "https://chatgpt.com/",
                icon: "fa-solid fa-message"
            }
        ]
    },
    {
        category: "托管 & 部署",
        icon: "fa-solid fa-server",
        tools: [
            {
                name: "Cloudflare",
                description: "CDN和安全服务提供商",
                url: "www.cloudflare.com",
                icon: "fa-solid fa-cloud"
            },
            {
                name: "Github",
                description: "全球最大的代码托管平台",
                url: "https://github.com/",
                icon: "fa-brands fa-github"
            },
            {
                name: "Vercel",
                description: "专注前端的云部署平台",
                url: "https://vercel.com/",
                icon: "fa-solid fa-triangle"
            }
        ]
    },
    {
        category: "模板",
        icon: "fa-solid fa-copy",
        tools: [
            {
                name: "Vercel Templates",
                description: "Vercel官方项目模板",
                url: "https://vercel.com/templates",
                icon: "fa-solid fa-palette"
            },
            {
                name: "Github",
                description: "GitHub上的网站模板资源",
                url: "https://github.com/topics/website-",
                icon: "fa-brands fa-github"
            }
        ]
    },
    {
        category: "产品榜单",
        icon: "fa-solid fa-trophy",
        tools: [
            {
                name: "Producthunt",
                description: "发现最新科技产品的平台",
                url: "https://www.producthunt.com/",
                icon: "fa-solid fa-paw"
            },
            {
                name: "Toolify",
                description: "AI工具收集平台",
                url: "Toolify.ai",
                icon: "fa-solid fa-screwdriver-wrench"
            }
        ]
    },
    {
        category: "数据库",
        icon: "fa-solid fa-database",
        tools: [
            {
                name: "Supabase",
                description: "开源的Firebase替代品",
                url: "https://supabase.com/",
                icon: "fa-solid fa-table"
            }
        ]
    },
    {
        category: "统计",
        icon: "fa-solid fa-chart-pie",
        tools: [
            {
                name: "Google Search Console",
                description: "谷歌搜索性能监控工具",
                url: "https://search.google.com/search-console/about",
                icon: "fa-brands fa-google"
            },
            {
                name: "Google Analytics",
                description: "网站流量分析工具",
                url: "https://developers.google.com/analytics",
                icon: "fa-solid fa-chart-simple"
            }
        ]
    },
    {
        category: "设计",
        icon: "fa-solid fa-paint-brush",
        tools: [
            {
                name: "Figma",
                description: "基于云的UI/UX设计工具",
                url: "www.figma.com",
                icon: "fa-brands fa-figma"
            },
            {
                name: "Canva",
                description: "简易图形设计平台，适合非专业设计师",
                url: "www.canva.com",
                icon: "fa-solid fa-pen-ruler"
            }
        ]
    }
];

// 格式化URL
function formatUrl(url) {
    if (!url) return "#";
    
    // 确保URL包含协议
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return 'https://' + url;
    }
    
    return url;
}

// 从URL中提取域名
function extractDomain(url) {
    if (!url) return '';
    
    // 确保URL包含协议
    let fullUrl = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        fullUrl = 'https://' + url;
    }
    
    try {
        const urlObj = new URL(fullUrl);
        return urlObj.hostname;
    } catch (e) {
        // 如果URL解析失败，尝试简单的正则表达式提取
        const domainMatch = fullUrl.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im);
        return domainMatch ? domainMatch[1] : '';
    }
}

// 生成工具卡片HTML
function createToolCard(tool) {
    const formattedUrl = formatUrl(tool.url);
    const domain = extractDomain(tool.url);
    
    // 特殊情况处理
    let specialDomain = domain;
    if (domain === 'www.cursor.com') {
        specialDomain = 'cursor.com';
    }
    
    const logoUrl = `https://logo.clearbit.com/${domain}?size=80`;
    
    // 为特定工具设置本地logo
    const localLogos = {
        'bolt.new': 'images/logo/bolt.new.png',
        'chatgpt.com': 'images/logo/chatgpt.png',
        'claude.ai': 'images/logo/claude.jpg',
        'cursor.com': 'images/logo/cursor.jpg',
        'www.cursor.com': 'images/logo/cursor.jpg'
    };
    
    // 为其他特殊情况手动设置logo URL
    const customLogos = {
        'searchsuggest.tips': `https://ui-avatars.com/api/?name=S&background=0D8ABC&color=fff`,
        'query.domains': `https://ui-avatars.com/api/?name=QD&background=0D8ABC&color=fff`,
        'toolify.ai': `https://ui-avatars.com/api/?name=T&background=0D8ABC&color=fff`
    };
    
    // 优先使用本地logo，其次使用自定义logo，最后使用Clearbit
    let finalLogoUrl = localLogos[specialDomain] || customLogos[domain] || logoUrl;
    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name.substring(0, 2))}&background=0D8ABC&color=fff`;
    
    // 调试信息
    console.log(`Tool: ${tool.name}, Domain: ${domain}, Special: ${specialDomain}, Logo: ${finalLogoUrl}`);
    
    return `
    <div class="tool-card p-4 flex flex-col h-full">
        <div class="flex items-start mb-2">
            <div class="tool-logo-container mr-2 flex-shrink-0">
                <div class="logo-placeholder"></div>
                <img 
                    src="${finalLogoUrl}" 
                    alt="${tool.name} Logo" 
                    class="tool-logo${localLogos[specialDomain] ? ' local-logo' : ''}" 
                    onload="this.parentNode.classList.add('loaded')" 
                    onerror="this.onerror=null; this.src='${fallbackUrl}'; this.classList.add('fallback-logo'); this.parentNode.classList.add('loaded');"
                >
            </div>
            <a href="${formattedUrl}" target="_blank" rel="noopener noreferrer" class="block hover:text-blue-600 transition-colors duration-200">
                <h3 class="tool-name flex items-center text-base">
                    ${tool.name}
                    <i class="fas fa-external-link-alt ml-1 text-xs text-gray-400"></i>
                </h3>
            </a>
        </div>
        <p class="tool-description flex-grow text-sm">${tool.description}</p>
    </div>
    `;
}

// 生成分类区域HTML
function createCategorySection(categoryData, index) {
    const isLast = index === toolsData.length - 1;
    
    let html = `
    <section class="category-section" id="category-${index}">
        <h2 class="category-title flex items-center">
            <i class="${categoryData.icon} mr-2 text-blue-500"></i>
            ${categoryData.category}
            <span class="ml-2 text-sm text-gray-500 font-normal">(${categoryData.tools.length})</span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
    `;
    
    categoryData.tools.forEach(tool => {
        html += createToolCard(tool);
    });
    
    html += `
        </div>
    </section>
    `;
    
    if (!isLast) {
        html += `<div class="category-divider"></div>`;
    }
    
    return html;
}

// 生成左侧分类导航HTML
function createLeftCategoryNav() {
    let html = '';
    
    toolsData.forEach((category, index) => {
        html += `
        <a href="#category-${index}" class="category-link flex items-center justify-between" data-index="${index}">
            <div class="flex items-center">
                <i class="${category.icon} mr-2 text-blue-500"></i>
                <span class="category-name">${category.category}</span>
            </div>
            <span class="category-count">${category.tools.length}</span>
        </a>
        `;
    });
    
    return html;
}

// 生成顶部导航链接
function createTopNavLinks() {
    let html = '';
    
    // 限制显示的分类数量，避免顶部导航过长
    const visibleCategories = toolsData.slice(0, 5);
    
    visibleCategories.forEach((category, index) => {
        html += `
        <a href="#category-${index}" class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            ${category.category}
        </a>
        `;
    });
    
    // 如果有更多分类，添加"更多"下拉菜单
    if (toolsData.length > 5) {
        html += `
        <div class="relative group">
            <button class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex items-center">
                更多
                <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div class="absolute right-0 w-48 py-1 mt-1 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
        `;
        
        toolsData.slice(5).forEach((category, index) => {
            html += `
            <a href="#category-${index + 5}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                ${category.category}
            </a>
            `;
        });
        
        html += `
            </div>
        </div>
        `;
    }
    
    return html;
}

// 生成移动端导航链接
function createMobileNavLinks() {
    let html = '';
    
    toolsData.forEach((category, index) => {
        html += `
        <a href="#category-${index}" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 mobile-nav-link">
            ${category.category}
        </a>
        `;
    });
    
    return html;
}

// 加载页面内容
document.addEventListener('DOMContentLoaded', () => {
    const mainElement = document.querySelector('main');
    const leftCategoryNavElement = document.getElementById('left-category-nav');
    const topNavElement = document.querySelector('.sm\\:flex.sm\\:items-center');
    const mobileNavElement = document.querySelector('#mobile-menu .px-2');
    
    // 生成主内容
    let content = '';
    toolsData.forEach((category, index) => {
        content += createCategorySection(category, index);
    });
    mainElement.innerHTML = content;
    
    // 生成左侧分类导航
    leftCategoryNavElement.innerHTML += createLeftCategoryNav();
    
    // 生成顶部导航链接
    topNavElement.innerHTML = createTopNavLinks();
    
    // 生成移动端导航链接
    mobileNavElement.innerHTML = createMobileNavLinks();
    
    // 移动端菜单切换
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // 点击移动端导航链接后关闭菜单
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // 页面滚动时高亮当前分类
    const categoryElements = document.querySelectorAll('.category-section');
    const categoryLinks = document.querySelectorAll('.category-link');
    
    function highlightCurrentCategory() {
        let currentCategoryIndex = 0;
        const scrollPosition = window.scrollY + 100; // 添加一些偏移
        
        categoryElements.forEach((section, index) => {
            if (section.offsetTop <= scrollPosition) {
                currentCategoryIndex = index;
            }
        });
        
        // 高亮左侧导航链接
        categoryLinks.forEach((link, index) => {
            if (index === currentCategoryIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightCurrentCategory);
    highlightCurrentCategory(); // 初始运行一次
    
    // 平滑滚动并更新导航状态
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // 添加平滑滚动
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 考虑顶部导航栏的高度
                    behavior: 'smooth'
                });
                
                // 更新导航状态
                if (this.classList.contains('category-link')) {
                    categoryLinks.forEach(link => link.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
}); 
