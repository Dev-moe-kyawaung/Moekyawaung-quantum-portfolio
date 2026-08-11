// ============================================
// QUANTUM PORTFOLIO - QUANTUM EFFECTS ENGINE
// ============================================

class QuantumEffects {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.effects = [];
        this.init();
    }

    init() {
        // Setup canvas
        this.canvas.id = 'quantumCanvas';
        this.canvas.style.cssText = 'position:fixed;top:0;left:0;z-index:1;pointer-events:none;';
        document.body.appendChild(this.canvas);
        
        // Resize handler
        window.addEventListener('resize', () => this.resize());
        this.resize();
        
        // Initialize effects
        this.initParticleSystem();
        this.initCascadingStreams();
        this.initMatrixGrid();
        
        // Start animation
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    // Particle System
    initParticleSystem() {
        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: Math.random() * -1 - 0.5,
                size: Math.random() * 3 + 1,
                color: ['#00f0ff', '#a855f7', '#3b82f6'][Math.floor(Math.random() * 3)],
                alpha: Math.random() * 0.5 + 0.2,
                pulse: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.pulse += 0.02;
            
            if (p.y < -10) {
                p.y = this.canvas.height + 10;
                p.x = Math.random() * this.canvas.width;
            }
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.alpha + Math.sin(p.pulse) * 0.3;
            this.ctx.fill();
            
            // Glow effect
            if (Math.random() < 0.01) {
                this.createBurst(p.x, p.y);
            }
        });
        
        this.ctx.globalAlpha = 1;
        requestAnimationFrame(() => this.animate());
    }

    // Create particle burst effect
    createBurst(x, y) {
        const burstCount = 5;
        for (let i = 0; i < burstCount; i++) {
            const angle = (Math.PI * 2 / burstCount) * i;
            const velocity = 2;
            const burstParticle = {
                x: x,
                y: y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                life: 1
            };
            
            this.effects.push(burstParticle);
        }
    }

    // Cascading Data Streams
    initCascadingStreams() {
        this.streams = [];
        for (let i = 0; i < 5; i++) {
            this.streams.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                length: Math.random() * 100 + 50,
                speed: Math.random() * 3 + 1,
                characters: '01'.repeat(50),
                color: i % 2 === 0 ? '#00f0ff' : '#a855f7'
            });
        }
    }

    updateStreams() {
        this.streams.forEach((stream, index) => {
            stream.y += stream.speed;
            
            // Draw the stream
            this.ctx.fillStyle = stream.color;
            this.ctx.font = '10px monospace';
            
            for (let i = 0; i < stream.length; i++) {
                const char = stream.characters[Math.floor(Math.random() * stream.characters.length)];
                const charY = stream.y - i * 10;
                
                this.ctx.globalAlpha = 1 - (i / stream.length);
                this.ctx.fillText(char, stream.x, charY);
            }
            
            // Reset when off screen
            if (stream.y > this.canvas.height + stream.length * 10) {
                stream.y = 0;
                stream.x = Math.random() * this.canvas.width;
            }
        });
        
        this.ctx.globalAlpha = 1;
    }

    // Shifting Matrix Grid
    initMatrixGrid() {
        this.gridCells = [];
        const cellSize = 20;
        const cols = Math.ceil(this.canvas.width / cellSize);
        const rows = Math.ceil(this.canvas.height / cellSize);
        
        for (let i = 0; i < cols * rows; i++) {
            this.gridCells.push({
                alpha: Math.random() * 0.5,
                speed: Math.random() * 0.02 + 0.005,
                active: Math.random() > 0.7
            });
        }
    }

    updateMatrixGrid() {
        const cellSize = 20;
        const cols = Math.ceil(this.canvas.width / cellSize);
        
        this.gridCells.forEach((cell, index) => {
            if (cell.active) {
                const x = (index % cols) * cellSize;
                const y = Math.floor(index / cols) * cellSize;
                
                cell.alpha += Math.sin(Date.now() * cell.speed) * 0.001;
                cell.alpha = Math.max(0, Math.min(0.5, cell.alpha));
                
                this.ctx.fillStyle = `rgba(0, 240, 255, \${cell.alpha * 0.3})`;
                this.ctx.fillRect(x, y, cellSize, cellSize);
            }
        });
    }

    // Floating AI Orb Interaction
    createOrbBurst() {
        const orb = document.getElementById('quantumOrb');
        if (!orb) return;
        
        const rect = orb.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 10; i++) {
            const angle = (Math.PI * 2 / 10) * i + Math.random() * 0.5;
            const distance = Math.random() * 100 + 20;
            
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #00f0ff;
                border-radius: 50%;
                left: \${centerX}px;
                top: \${centerY}px;
                pointer-events: none;
                transition: transform 0.8s ease-out;
            `;
            
            document.body.appendChild(particle);
            
            requestAnimationFrame(() => {
                particle.style.transform = `translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)`;
                particle.style.opacity = '0';
            });
            
            setTimeout(() => particle.remove(), 800);
        }
    }
}

// Initialize quantum effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.quantumEffects = new QuantumEffects();
});
