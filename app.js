// ===== 书籍数据 =====
const books = [
    {
        title: "三体",
        author: "刘慈欣",
        emoji: "🌌",
        desc: "地球文明向宇宙发出的第一声啼鸣，以恢宏的想象力展现了人类面对未知宇宙时的渺小与伟大。",
        category: "文学小说",
        tags: ["科幻", "中国文学", "雨果奖"]
    },
    {
        title: "百年孤独",
        author: "加西亚·马尔克斯",
        emoji: "🦋",
        desc: "马孔多小镇布恩迪亚家族七代人的传奇故事，魔幻现实主义的巅峰之作。",
        category: "文学小说",
        tags: ["魔幻现实主义", "拉美文学", "诺贝尔奖"]
    },
    {
        title: "人类简史",
        author: "尤瓦尔·赫拉利",
        emoji: "🧬",
        desc: "从认知革命到人工智能，重新审视人类如何从无名小卒登上食物链顶端。",
        category: "人文社科",
        tags: ["历史", "人类学", "畅销"]
    },
    {
        title: "思考，快与慢",
        author: "丹尼尔·卡尼曼",
        emoji: "🧠",
        desc: "诺贝尔经济学奖得主揭示人类决策中的两种思维系统，理解决策偏差的本质。",
        category: "心理成长",
        tags: ["心理学", "决策", "认知偏差"]
    },
    {
        title: "代码大全",
        author: "史蒂夫·麦康奈尔",
        emoji: "💻",
        desc: "软件构建的百科全书，涵盖编程的方方面面，是程序员必备的案头参考书。",
        category: "科技前沿",
        tags: ["编程", "软件工程", "经典"]
    },
    {
        title: "黑客与画家",
        author: "保罗·格雷厄姆",
        emoji: "🎨",
        desc: "硅谷创业教父的思考方式，关于编程、创业和独立思考的独到见解。",
        category: "科技前沿",
        tags: ["创业", "编程思想", "硅谷"]
    },
    {
        title: "原则",
        author: "瑞·达利欧",
        emoji: "📐",
        desc: "桥水基金创始人40年的生活和工作原则，系统化的决策框架。",
        category: "商业经管",
        tags: ["管理", "投资", "决策"]
    },
    {
        title: "小王子",
        author: "安托万·德·圣-埃克苏佩里",
        emoji: "🌹",
        desc: "以孩子的视角审视成人世界，简单故事中蕴含深刻的哲理与温情。",
        category: "文学小说",
        tags: ["童话", "哲学", "经典"]
    },
    {
        title: "被讨厌的勇气",
        author: "岸见一郎 / 古贺史健",
        emoji: "💪",
        desc: "以对话形式解读阿德勒心理学，教你如何获得自由和幸福的勇气。",
        category: "心理成长",
        tags: ["心理学", "阿德勒", "自我成长"]
    },
    {
        title: "浪潮之巅",
        author: "吴军",
        emoji: "🌊",
        desc: "讲述IT产业的兴衰更替，从AT&T到Google，揭示科技行业的底层规律。",
        category: "科技前沿",
        tags: ["科技史", "互联网", "IT产业"]
    },
    {
        title: "枪炮、病菌与钢铁",
        author: "贾雷德·戴蒙德",
        emoji: "⚔️",
        desc: "为什么是欧亚大陆人征服了世界？从地理和环境角度解读人类文明的不平等。",
        category: "人文社科",
        tags: ["历史", "地理", "普利策奖"]
    },
    {
        title: "纳瓦尔宝典",
        author: "埃里克·乔根森",
        emoji: "💎",
        desc: "硅谷天使投资人纳瓦尔的智慧精华，关于财富创造和幸福人生的实用指南。",
        category: "商业经管",
        tags: ["投资", "创业", "财富思维"]
    },
    {
        title: "活着",
        author: "余华",
        emoji: "🌾",
        desc: "福贵跌宕起伏的一生，在苦难中寻找生存的意义，中国当代文学经典。",
        category: "文学小说",
        tags: ["中国文学", "当代", "经典"]
    },
    {
        title: "深度学习",
        author: "Ian Goodfellow 等",
        emoji: "🤖",
        desc: "深度学习领域的圣经级教材，从数学基础到前沿研究的全面覆盖。",
        category: "科技前沿",
        tags: ["AI", "深度学习", "教材"]
    },
    {
        title: "非暴力沟通",
        author: "马歇尔·卢森堡",
        emoji: "💬",
        desc: "学会用爱与理解代替指责与对抗，改善人际关系的高效沟通方法。",
        category: "心理成长",
        tags: ["沟通", "心理学", "人际关系"]
    },
    {
        title: "从零到一",
        author: "彼得·蒂尔",
        emoji: "🚀",
        desc: "PayPal创始人的创业哲学，创新不是从1到N，而是从0到1的质变。",
        category: "商业经管",
        tags: ["创业", "创新", "硅谷"]
    }
];

// ===== 状态 =====
let currentCategory = 'all';
let currentSearch = '';

// ===== 主题切换 =====
const saved = localStorage.getItem('yanread-theme') || 'dark';
document.documentElement.setAttribute('data-theme', saved);
document.querySelector('.theme-icon').textContent = saved === 'dark' ? '🌙' : '☀️';

function toggleTheme() {
    const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('yanread-theme', t);
    document.querySelector('.theme-icon').textContent = t === 'dark' ? '🌙' : '☀️';
}

// ===== 渲染书籍 =====
function renderBooks() {
    const grid = document.getElementById('booksGrid');
    let filtered = books;

    if (currentCategory !== 'all') {
        filtered = filtered.filter(b => b.category === currentCategory);
    }

    if (currentSearch) {
        const q = currentSearch.toLowerCase();
        filtered = filtered.filter(b =>
            b.title.toLowerCase().includes(q) ||
            b.author.toLowerCase().includes(q) ||
            b.category.toLowerCase().includes(q) ||
            b.tags.some(tag => tag.toLowerCase().includes(q))
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<div style="text-align:center;color:var(--text-secondary);padding:3rem;">没有找到匹配的书籍</div>';
        return;
    }

    grid.innerHTML = filtered.map((book, i) => `
        <div class="book-card" style="animation-delay:${i * 0.05}s">
            <div class="book-header">
                <div class="book-emoji">${book.emoji}</div>
                <div>
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                </div>
            </div>
            <div class="book-desc">${book.desc}</div>
            <div class="book-meta">
                <span class="book-tag">${book.category}</span>
                ${book.tags.map(t => `<span class="book-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// ===== 分类过滤 =====
function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === cat);
    });
    renderBooks();
}

// ===== 搜索过滤 =====
function filterBooks() {
    currentSearch = document.getElementById('searchInput').value.trim();
    renderBooks();
}

// ===== 初始化 =====
renderBooks();
