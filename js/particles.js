// ============================================
// QUANTUM PORTFOLIO - PARTICLE BACKGROUND
// ============================================

class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'particleCanvas';
            this.canvas.style.cssText = 'position:fixed;top:0;left:0;z-index:0;pointer-events:none;';
            document.body.appendChild(this.canvas);
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null };
        this.colors = ['#00f0ff', '#a855f7', '#3b82f6', '#06b6d4', '#8b5cf6'];
        
        this.init();
        this.bindEvents();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        document.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    createParticles() {
        const particleCount = Math.min(100, Math.floor(window.innerWidth * window.innerHeight / 15000));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 0.5,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                alpha: Math.random() * 0.8 + 0.2,
                pulseSpeed: Math.random() * 0.1 + 0.02,
                pulsePhase: Math.random() * Math.PI * 2
            });
        }
        
        // Create connections
        this.connections = [];
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update particles
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.pulsePhase += p.pulseSpeed;
            
            // Bounce on edges
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
            
            // Mouse interaction
            if (this.mouse.x !== null) {
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    const force = (150 - dist) / 150 * 0.5;
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                }
            }
            
            // Control speed
            const maxSpeed = 2;
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (speed > maxSpeed) {
                p.vx = (p.vx / speed) * maxSpeed;
                p.vy = (p.vy / speed) * maxSpeed;
            }
            
            // Draw particle
            const alpha = p.alpha + Math.sin(p.pulsePhase) * 0.3;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
            this.ctx.fill();
        });
        
        // Draw connections
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
                
                if (dist < 100) {
                    const opacity = 1 - (dist / 100);
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(0, 240, 255, \${opacity * 0.2})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
        
        // Matrix rain effect overlay
        this.drawMatrixRain();
        
        this.ctx.globalAlpha = 1;
        requestAnimationFrame(() => this.animate());
    }

    drawMatrixRain() {
        const chars = 'アイウエオカキクケコサシスセソタチツテト0101';
        const fontSize = 12;
        const columns = Math.ceil(this.canvas.width / fontSize);
        
        if (!this.matrixRain) {
            this.matrixRain = [];
            for (let i = 0; i < columns; i++) {
                this.matrixRain[i] = Math.random() * -this.canvas.height;
            }
        }
        
        this.ctx.fillStyle = '#0a0e17';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = `\${fontSize}px monospace`;
        
        for (let i = 0; i < columns; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            const y = this.matrixRain[i];
            
            this.ctx.fillStyle = Math.random() > 0.975 ? '#ffffff' : '#00f0ff';
            this.ctx.fillText(char, x, y);
            
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.matrixRain[i] = 0;
            }
            
            this.matrixRain[i] += fontSize * 0.5;
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.particleBackground = new ParticleBackground();
});
