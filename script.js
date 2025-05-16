const version = "1";

document.addEventListener('DOMContentLoaded', function() {
    const versionElement = document.getElementById('version');
    if (versionElement) {
        versionElement.textContent = version;
    }
    
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = 'https://github.com/KeoLotso/Keos-Developer-Tools/raw/main/KDT%20V1.unitypackage';
            link.download = `KDT_V${version}.unitypackage`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            console.log(`Download initiated: KDT ${version}.unitypackage`);
        });
    }
    
    const featureCards = document.querySelectorAll('.feature-card');
    
    const animateOnScroll = function() {
        featureCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    
    animateOnScroll();
});
