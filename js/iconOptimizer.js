/**
 * Icon Optimization System
 * Preloads and caches SVG icons for better performance
 */

class IconOptimizer {
    constructor() {
        this.iconCache = new Map();
        this.preloadPromises = [];
        this.criticalIcons = [
            'arrow.svg',
            'bulb.svg', 
            'tasks.svg',
            'rocket.svg',
            'external-link.svg',
            'github.svg',
            'plus.svg',
            'minus.svg',
            'success.svg',
            'error.svg',
            'linkedin.svg',
            'insta.svg'
        ];
    }

    /**
     * Preload critical icons immediately
     */
    async preloadCriticalIcons() {
        const preloadPromises = this.criticalIcons.map(iconName => 
            this.preloadIcon(`assets/icons/${iconName}`)
        );

        try {
            await Promise.all(preloadPromises);
            console.log('✅ All critical icons preloaded successfully');
        } catch (error) {
            console.warn('⚠️ Some icons failed to preload:', error);
        }
    }

    /**
     * Preload a single icon
     */
    preloadIcon(iconPath) {
        return new Promise((resolve, reject) => {
            if (this.iconCache.has(iconPath)) {
                resolve(this.iconCache.get(iconPath));
                return;
            }

            const img = new Image();
            img.onload = () => {
                this.iconCache.set(iconPath, img);
                resolve(img);
            };
            img.onerror = () => {
                console.warn(`Failed to preload icon: ${iconPath}`);
                reject(new Error(`Failed to load ${iconPath}`));
            };
            img.src = iconPath;
        });
    }

    /**
     * Add loading optimization for dynamically created icons
     */
    optimizeIconLoading() {
        // Add intersection observer for lazy loading non-critical icons
        const iconObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src && !img.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        iconObserver.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px'
        });

        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            iconObserver.observe(img);
        });
    }

    /**
     * Initialize the icon optimization system
     */
    async init() {
        // Start preloading critical icons immediately
        await this.preloadCriticalIcons();
        
        // Set up lazy loading for other icons
        this.optimizeIconLoading();
        
        // Add performance monitoring
        this.monitorIconPerformance();
    }

    /**
     * Monitor icon loading performance
     */
    monitorIconPerformance() {
        if ('performance' in window) {
            // Monitor resource loading times
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.name.includes('assets/icons/') && entry.name.endsWith('.svg')) {
                        const loadTime = entry.responseEnd - entry.startTime;
                        if (loadTime > 100) { // Log slow icon loads
                            console.warn(`Slow icon load: ${entry.name} took ${loadTime.toFixed(2)}ms`);
                        }
                    }
                });
            });
            observer.observe({ entryTypes: ['resource'] });
        }
    }
}

// Initialize icon optimization when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const iconOptimizer = new IconOptimizer();
    iconOptimizer.init();
});

// Export for use in other modules
window.IconOptimizer = IconOptimizer;