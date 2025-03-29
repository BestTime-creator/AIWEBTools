// 定义工具数据
const toolsData = [
    {
        category: "常用工具",
        tools: [
            {
                name: "Similarweb",
                description: "一个网站分析和市场情报工具，提供网站流量数据、用户行为分析和竞争对手分析。",
                url: "https://www.similarweb.com/"
            },
            {
                name: "Semrush",
                description: "综合性的网络营销和搜索引擎优化 (SEO) 工具平台。",
                url: "https://www.semrush.com/"
            },
            {
                name: "Ahrefs",
                description: "主要专注于 SEO (搜索引擎优化) 的综合工具集。其核心功能包括反向链接分析、关键词研究、内容探索和网站 SEO 审计。",
                url: "https://ahrefs.com/"
            },
            {
                name: "TDK",
                description: "AITDK SEO Extension 是一款多功能浏览器扩展，旨在提供全面的网站分析。凭借其强大的功能，AITDK SEO Extension 可跟踪网站流量、执行 Whois 查询、关键词密度检查并进行 SEO 分析。",
                url: "https://chromewebstore.google.com/detail/aitdk-seo-extension-%E6%B5%81%E9%87%8F%E5%85%B3%E9%94%AE%E8%AF%8D/hhfkpjffbhledfpkh"
            },
            {
                name: "Google Trends",
                description: "谷歌官方提供的免费工具，用于分析特定关键词或主题在谷歌搜索中的受欢迎程度随时间的变化趋势。它可以帮助用户了解搜索词的季节性变化、地域差异和相关主题。Google Trends 对于发现新兴趋势、季节性变化和区域差异特别有用。",
                url: "https://trends.google.com/trends/"
            },
            {
                name: "Google Trending now",
                description: "谷歌趋势当下流行。",
                url: "https://trends.google.com/trending"
            },
            {
                name: "searchsuggest.tips",
                description: "谷歌下拉词。关键词研究工具，专注于收集和展示搜索引擎的自动补全建议。",
                url: "searchsuggest.tips"
            }
        ]
    },
    {
        category: "AI 编程",
        tools: [
            {
                name: "Cursor",
                description: "一个面向开发者的 AI 编程助手和代码编辑器，基于 VSCode 构建，集成了 AI 辅助编码功能。可能是最强大的 AI 代码生产力工具。",
                url: "https://www.cursor.com/cn"
            },
            {
                name: "Windsurf",
                description: "提供 AI 驱动的编程助手和代码生成工具。",
                url: "https://codeium.com/windsurf"
            },
            {
                name: "Bolt.new",
                description: "一个快速创建网页或网络应用的平台。Bolt.new 通常允许用户通过简化的界面迅速搭建网站或网络应用，无需深入编码知识，让非技术人员也能创建功能性网站或应用。",
                url: "https://bolt.new/"
            }
        ]
    },
    {
        category: "域名",
        tools: [
            {
                name: "Spaceship",
                description: "专为您打造的数字平台启动您的网站、创意和未来，提供域名、主机、电子邮件和网络工具，让您完全掌控。可以用支付宝支付。",
                url: "https://www.spaceship.com/"
            },
            {
                name: "Namecheap",
                description: "一家域名注册商和网络托管服务提供商，以其相对较低的价格和用户友好的界面而闻名。除了域名注册，还提供 SSL 证书、网站托管、邮箱托管等服务。",
                url: "www.namecheap.com"
            },
            {
                name: "Godaddy",
                description: "全球最大的域名注册商和网络托管服务提供商之一。提供域名注册、网站建设工具、电子邮件、网络托管和各种在线营销工具。",
                url: "https://www.godaddy.com/"
            },
            {
                name: "instantdomainsearch",
                description: "即时域名搜索，搜索结果在您输入时立即出现。检查域名可用性、常用扩展和出售的高级域名。",
                url: "https://instantdomainsearch.com/"
            },
            {
                name: "Query.Domains",
                description: "批量域名可用性检查器。",
                url: "https://query.domains/"
            }
        ]
    },
    {
        category: "AI 工具",
        tools: [
            {
                name: "Claude",
                description: "Anthropic开发的先进AI助手，擅长自然语言处理和理解复杂概念。",
                url: "Claude.ai"
            },
            {
                name: "ChatGPT",
                description: "OpenAI开发的大型语言模型，可用于对话、内容创作和问题解决。",
                url: "https://chatgpt.com/"
            }
        ]
    },
    {
        category: "托管 & 部署",
        tools: [
            {
                name: "Cloudflare",
                description: "一个全球性的云网络平台，提供内容分发网络 (CDN)、DDoS 防护、互联网安全服务和分布式域名服务器 (DNS) 系统。",
                url: "www.cloudflare.com"
            },
            {
                name: "Github",
                description: "全球最大的代码托管平台和软件开发协作工具。",
                url: "https://github.com/"
            },
            {
                name: "Vercel",
                description: "一个面向前端开发者的云平台，专注于提供现代网站和 web 应用的部署和托管服务。Vercel 以其对 Next.js 框架的优化支持而闻名。",
                url: "https://vercel.com/"
            }
        ]
    },
    {
        category: "模板",
        tools: [
            {
                name: "Vercel Templates",
                description: "Vercel 模板。",
                url: "https://vercel.com/templates"
            },
            {
                name: "Github",
                description: "Github 模板。",
                url: "https://github.com/topics/website-"
            }
        ]
    },
    {
        category: "产品榜单",
        tools: [
            {
                name: "Producthunt",
                description: "发现新产品和技术的平台，用户可以在上面分享、发现和讨论新的应用程序、网站、技术产品和工具。用来了解最新推出的产品和创新。",
                url: "https://www.producthunt.com/"
            },
            {
                name: "Toolify",
                description: "最佳人工智能网站和工具的收集分享平台。",
                url: "Toolify.ai"
            }
        ]
    },
    {
        category: "数据库",
        tools: [
            {
                name: "Supabase",
                description: "Supabase 是一个开源的 Firebase 替代品，它提供了一套完整的后端服务和工具，帮助开发者快速构建应用程序。Supabase 结合了 PostgreSQL 数据库的强大功能和现代化的开发工具。",
                url: "https://supabase.com/"
            }
        ]
    },
    {
        category: "统计",
        tools: [
            {
                name: "Google Search Console",
                description: "由谷歌提供的免费工具，帮助网站所有者监控和维护他们网站在谷歌搜索结果中的表现。查看网站的搜索排名、点击量、展示量，以及出现的问题。",
                url: "https://search.google.com/search-console/about"
            },
            {
                name: "Google Analytics",
                description: "一个强大的网站和应用分析工具，帮助网站所有者了解用户如何与他们的网站互动。了解网站每日访问量、用户停留时长、跳出率等指标，并提供详细的报告和分析。",
                url: "https://developers.google.com/analytics"
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

// 生成工具卡片HTML
function createToolCard(tool) {
    const formattedUrl = formatUrl(tool.url);
    
    return `
    <div class="tool-card p-6 flex flex-col h-full">
        <a href="${formattedUrl}" target="_blank" rel="noopener noreferrer" class="block mb-2 hover:text-blue-600 transition-colors duration-200">
            <h3 class="tool-name flex items-center">
                ${tool.name}
                <i class="fas fa-external-link-alt ml-2 text-xs text-gray-400"></i>
            </h3>
        </a>
        <p class="tool-description flex-grow">${tool.description}</p>
    </div>
    `;
}

// 生成分类区域HTML
function createCategorySection(categoryData, index) {
    const isLast = index === toolsData.length - 1;
    
    let html = `
    <section class="category-section mb-12" id="category-${index}">
        <h2 class="category-title flex items-center">
            ${categoryData.category}
            <span class="ml-2 text-sm text-gray-500 font-normal">(${categoryData.tools.length})</span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

// 生成分类导航按钮
function createCategoryNavButtons() {
    let html = '';
    
    toolsData.forEach((category, index) => {
        html += `
        <a href="#category-${index}" class="inline-block px-4 py-2 bg-white hover:bg-blue-50 text-gray-800 rounded-full shadow-sm transition-colors duration-200 border border-gray-200">
            ${category.category}
        </a>
        `;
    });
    
    return html;
}

// 生成顶部导航链接
function createTopNavLinks() {
    let html = '';
    
    // 限制显示的分类数量，避免顶部导航过长
    const visibleCategories = toolsData.slice(0, 6);
    
    visibleCategories.forEach((category, index) => {
        html += `
        <a href="#category-${index}" class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            ${category.category}
        </a>
        `;
    });
    
    // 如果有更多分类，添加"更多"下拉菜单
    if (toolsData.length > 6) {
        html += `
        <div class="relative group">
            <button class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex items-center">
                更多
                <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div class="absolute right-0 w-48 py-1 mt-1 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
        `;
        
        toolsData.slice(6).forEach((category, index) => {
            html += `
            <a href="#category-${index + 6}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
    const categoryNavElement = document.getElementById('category-nav');
    const topNavElement = document.querySelector('.sm\\:flex.sm\\:items-center');
    const mobileNavElement = document.querySelector('#mobile-menu .px-2');
    
    // 生成主内容
    let content = '';
    toolsData.forEach((category, index) => {
        content += createCategorySection(category, index);
    });
    mainElement.innerHTML = content;
    
    // 生成分类导航按钮
    categoryNavElement.innerHTML = createCategoryNavButtons();
    
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
    
    function highlightCurrentCategory() {
        let currentCategoryIndex = 0;
        const scrollPosition = window.scrollY + 100; // 添加一些偏移
        
        categoryElements.forEach((section, index) => {
            if (section.offsetTop <= scrollPosition) {
                currentCategoryIndex = index;
            }
        });
        
        // 高亮导航按钮
        document.querySelectorAll('#category-nav a').forEach((link, index) => {
            if (index === currentCategoryIndex) {
                link.classList.add('bg-blue-50', 'border-blue-300');
            } else {
                link.classList.remove('bg-blue-50', 'border-blue-300');
            }
        });
    }
    
    window.addEventListener('scroll', highlightCurrentCategory);
    highlightCurrentCategory(); // 初始运行一次
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 考虑顶部导航栏的高度
                    behavior: 'smooth'
                });
            }
        });
    });
}); 