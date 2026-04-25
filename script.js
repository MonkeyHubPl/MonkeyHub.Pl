function copyIP() {
    const ip = 'MonkeyHub.Pl';
    navigator.clipboard.writeText(ip).then(function() {
        const button = document.querySelector('.copy-btn');
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.background = 'linear-gradient(135deg, #10B981, #059669)';
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = 'linear-gradient(135deg, #10B981, #059669)';
        }, 2000);
    }).catch(function(err) {
        console.error('Nie udało się skopiować IP: ', err);
        const textArea = document.createElement('textarea');
        textArea.value = ip;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const button = document.querySelector('.copy-btn');
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.background = 'linear-gradient(135deg, #10B981, #059669)';
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = 'linear-gradient(135deg, #10B981, #059669)';
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; 
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(135deg, rgba(10, 22, 20, 0.98), rgba(17, 45, 40, 0.96))';
            navbar.style.boxShadow = '0 8px 40px rgba(16, 185, 129, 0.2)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, rgba(10, 22, 20, 0.95), rgba(17, 45, 40, 0.92))';
            navbar.style.boxShadow = '0 4px 30px rgba(16, 185, 129, 0.15)';
        }
    });
    
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.timeline-item, .social-card, .staff-card, .regulation-section, .faq-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    const serverLogoContainer = document.querySelector('.server-logo-container');
    if (serverLogoContainer) {
        let mouseX = 0;
        let mouseY = 0;
        let logoX = 0;
        let logoY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) * 100;
            mouseY = (e.clientY / window.innerHeight) * 100;
        });
        
        function animateLogo() {
            logoX += (mouseX - logoX) * 0.03;
            logoY += (mouseY - logoY) * 0.03;
            
            serverLogoContainer.style.transform = `translate(${logoX * 0.05}px, ${logoY * 0.05}px) rotateY(${logoX * 0.2}deg) rotateX(${logoY * 0.2}deg)`;
            requestAnimationFrame(animateLogo);
        }
        
        animateLogo();
    }
    
    function createCherryBlossom() {
        const blossom = document.createElement('div');
        blossom.className = 'cherry-blossom-particle';
        blossom.style.position = 'absolute';
        blossom.style.width = '10px';
        blossom.style.height = '10px';
        blossom.style.background = 'radial-gradient(circle, #FBB6CE, transparent)';
        blossom.style.borderRadius = '50%';
        blossom.style.left = Math.random() * window.innerWidth + 'px';
        blossom.style.top = '-10px';
        blossom.style.opacity = '0.7';
        blossom.style.pointerEvents = 'none';
        blossom.style.zIndex = '1';
        
        document.body.appendChild(blossom);
        
        const animation = blossom.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 0.7 },
            { transform: `translateY(${window.innerHeight + 20}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 8000 + Math.random() * 4000,
            easing: 'linear'
        });
        
        animation.onfinish = () => {
            blossom.remove();
        };
    }
    
    setInterval(createCherryBlossom, 2000);
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    const staffCards = document.querySelectorAll('.staff-card');
    staffCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            const avatar = this.querySelector('.staff-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            const avatar = this.querySelector('.staff-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        if (index % 2 === 0) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }
        item.style.transition = 'all 0.6s ease';
        timelineObserver.observe(item);
    });
    
    const minecraftBlocks = document.querySelector('.minecraft-blocks');
    if (minecraftBlocks) {
        let rotation = 0;
        function rotateBlocks() {
            rotation += 0.5;
            minecraftBlocks.style.transform = `translateX(${rotation}px) translateY(${rotation * 0.5}px) rotate(${rotation * 0.1}deg)`;
            requestAnimationFrame(rotateBlocks);
        }
        rotateBlocks();
    }
    
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 3000);
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.style.position = 'fixed';
                    particle.style.width = '20px';
                    particle.style.height = '20px';
                    particle.style.background = 'radial-gradient(circle, #8B5CF6, #C084FC)';
                    particle.style.borderRadius = '50%';
                    particle.style.left = Math.random() * window.innerWidth + 'px';
                    particle.style.top = Math.random() * window.innerHeight + 'px';
                    particle.style.pointerEvents = 'none';
                    particle.style.zIndex = '9999';
                    particle.style.boxShadow = '0 0 20px #8B5CF6';
                    
                    document.body.appendChild(particle);
                    
                    const animation = particle.animate([
                        { transform: 'scale(0) rotate(0deg)', opacity: 1 },
                        { transform: 'scale(2) rotate(360deg)', opacity: 0 }
                    ], {
                        duration: 1000,
                        easing: 'ease-out'
                    });
                    
                    animation.onfinish = () => {
                        particle.remove();
                    };
                }, i * 50);
            }
            
            konamiCode = [];
        }
    });
    
    const heroTitle = document.querySelector('.main-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
   
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    window.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        if (key === 'f12') { e.preventDefault(); e.stopPropagation(); }
        if (e.ctrlKey && key === 'u') { e.preventDefault(); e.stopPropagation(); }
        if (e.ctrlKey && key === 's') { e.preventDefault(); e.stopPropagation(); }
        if (e.ctrlKey && e.shiftKey && (key === 'i' || key === 'j' || key === 'c')) { 
            e.preventDefault(); e.stopPropagation(); 
        }
    }, true);

});

const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .loaded {
        animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
