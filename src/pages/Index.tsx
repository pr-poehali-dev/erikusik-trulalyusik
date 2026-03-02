import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_PLACEHOLDER = "https://cdn.poehali.dev/projects/69a5869b-0331-4c30-af95-daa6d51b531a/files/ee9f300a-9420-4375-8043-d504a836c755.jpg";

const galleryItems = [
  {
    id: 1,
    src: "https://cdn.poehali.dev/projects/69a5869b-0331-4c30-af95-daa6d51b531a/files/ee9f300a-9420-4375-8043-d504a836c755.jpg",
    caption: "Момент",
    size: "large",
  },
  {
    id: 2,
    src: "https://cdn.poehali.dev/projects/69a5869b-0331-4c30-af95-daa6d51b531a/files/8ce7d3a2-d05f-4692-affb-5fe154deb5af.jpg",
    caption: "Творчество",
    size: "medium",
  },
  {
    id: 3,
    src: "https://cdn.poehali.dev/projects/69a5869b-0331-4c30-af95-daa6d51b531a/files/5b3440cd-c7b9-4ffe-ad95-ae97cba67b65.jpg",
    caption: "Вдохновение",
    size: "medium",
  },
  {
    id: 4,
    src: "https://cdn.poehali.dev/projects/69a5869b-0331-4c30-af95-daa6d51b531a/files/8ce7d3a2-d05f-4692-affb-5fe154deb5af.jpg",
    caption: "Атмосфера",
    size: "small",
  },
  {
    id: 5,
    src: "https://cdn.poehali.dev/projects/69a5869b-0331-4c30-af95-daa6d51b531a/files/5b3440cd-c7b9-4ffe-ad95-ae97cba67b65.jpg",
    caption: "Детали",
    size: "small",
  },
];

const Index = () => {
  const [activeNav, setActiveNav] = useState("hero");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
  };

  return (
    <div className="grain-overlay min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "linear-gradient(to bottom, rgba(18,15,10,0.95), transparent)" }}>
        <button
          onClick={() => scrollTo("hero")}
          className="font-cormorant text-xl tracking-widest text-cream hover:text-coral transition-colors duration-300"
          style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.25em" }}
        >
          Э.Т.
        </button>
        <div className="flex gap-8">
          {[
            { id: "about", label: "Обо мне" },
            { id: "gallery", label: "Галерея" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="nav-link text-sm tracking-widest uppercase font-golos"
              style={{ fontFamily: "'Golos Text', sans-serif", letterSpacing: "0.15em" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* background decorations */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 75% 50%, rgba(232,133,106,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 25% 80%, rgba(232,133,106,0.07) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-5xl w-full items-center">
          {/* Text side */}
          <div className="order-2 md:order-1">
            <p
              className="animate-fade-up opacity-0-init delay-100 text-xs tracking-[0.4em] uppercase mb-6 font-golos"
              style={{ color: "var(--coral)", animationFillMode: "forwards" }}
            >
              Добро пожаловать
            </p>

            <h1
              className="animate-fade-up opacity-0-init delay-200 font-cormorant leading-none mb-2"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                fontWeight: 300,
                animationFillMode: "forwards",
              }}
            >
              Эрикусик
            </h1>
            <h2
              className="animate-fade-up opacity-0-init delay-300 shimmer-text font-cormorant leading-none mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontStyle: "italic",
                fontWeight: 300,
                animationFillMode: "forwards",
              }}
            >
              Трулялюсик
            </h2>

            <div
              className="animate-fade-up opacity-0-init delay-400 w-16 h-px mb-8"
              style={{ background: "var(--coral)", animationFillMode: "forwards" }}
            />

            <p
              className="animate-fade-up opacity-0-init delay-500 font-golos leading-relaxed mb-10 max-w-sm"
              style={{ color: "var(--warm-gray)", animationFillMode: "forwards", fontSize: "1.05rem" }}
            >
              Творческая личность с душой художника и сердцем мечтателя. Здесь живёт моя история.
            </p>

            <button
              onClick={() => scrollTo("about")}
              className="animate-fade-up opacity-0-init delay-600 group flex items-center gap-3 font-golos text-sm tracking-widest uppercase transition-all duration-300"
              style={{ color: "var(--coral)", animationFillMode: "forwards", letterSpacing: "0.15em" }}
            >
              Узнать больше
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-14" />
            </button>
          </div>

          {/* Photo side */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="animate-float relative">
              <div
                className="animate-scale-in opacity-0-init"
                style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "clamp(240px, 35vw, 380px)",
                    height: "clamp(300px, 44vw, 480px)",
                    borderRadius: "60% 40% 55% 45% / 50% 55% 45% 50%",
                    boxShadow: "0 30px 80px rgba(232,133,106,0.2), inset 0 0 0 1px rgba(232,133,106,0.15)",
                  }}
                >
                  <img
                    src={PHOTO_PLACEHOLDER}
                    alt="Эрикусик Трулялюсик"
                    className="w-full h-full object-cover"
                    style={{ filter: "saturate(0.9) contrast(1.05)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(232,133,106,0.15) 0%, transparent 50%, rgba(18,15,10,0.3) 100%)",
                    }}
                  />
                </div>

                {/* Decorative ring */}
                <div
                  className="absolute -z-10"
                  style={{
                    inset: "-16px",
                    borderRadius: "60% 40% 55% 45% / 50% 55% 45% 50%",
                    border: "1px solid rgba(232,133,106,0.2)",
                  }}
                />
                <div
                  className="absolute -z-10"
                  style={{
                    inset: "-32px",
                    borderRadius: "60% 40% 55% 45% / 50% 55% 45% 50%",
                    border: "1px dashed rgba(232,133,106,0.1)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards", opacity: 0 }}>
          <span className="text-xs tracking-[0.3em] uppercase font-golos" style={{ color: "var(--warm-gray)", fontSize: "0.65rem" }}>
            Скролл
          </span>
          <div className="w-px h-10 relative overflow-hidden" style={{ background: "rgba(140,123,107,0.3)" }}>
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                height: "40%",
                background: "var(--coral)",
                animation: "fadeUp 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6 overflow-hidden">
        <span className="section-number">01</span>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Label */}
            <div className="md:col-span-3 md:pt-3">
              <p
                className="text-xs tracking-[0.4em] uppercase font-golos mb-4"
                style={{ color: "var(--coral)" }}
              >
                01 / Обо мне
              </p>
              <div className="w-10 h-px" style={{ background: "var(--coral)" }} />
            </div>

            {/* Content */}
            <div className="md:col-span-9">
              <h2
                className="font-cormorant leading-tight mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 300,
                  color: "var(--cream)",
                }}
              >
                Творческая
                <br />
                <em style={{ color: "var(--coral)" }}>личность</em>
              </h2>

              <div
                className="space-y-5 font-golos leading-relaxed"
                style={{ color: "var(--warm-gray)", fontSize: "1.05rem", maxWidth: "520px" }}
              >
                <p>
                  Привет! Я — Эрикусик Трулялюсик. Живу в мире идей, красок и вдохновения. Каждый день открываю что-то новое и делюсь этим с миром.
                </p>
                <p>
                  Моя жизнь — это постоянное движение, творчество и поиск красоты в самых неожиданных местах.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-10">
                {["Творчество", "Вдохновение", "Красота", "Жизнь"].map((tag) => (
                  <span
                    key={tag}
                    className="font-golos text-xs tracking-widest uppercase px-4 py-2"
                    style={{
                      border: "1px solid rgba(232,133,106,0.3)",
                      color: "var(--coral)",
                      borderRadius: "2px",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,133,106,0.05) 0%, transparent 70%)",
          }}
        />
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative py-32 px-6 overflow-hidden">
        <span className="section-number" style={{ right: "-0.5rem", left: "auto" }}>02</span>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-end justify-between mb-16">
            <div>
              <p
                className="text-xs tracking-[0.4em] uppercase font-golos mb-4"
                style={{ color: "var(--coral)" }}
              >
                02 / Галерея
              </p>
              <h2
                className="font-cormorant leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 300,
                  color: "var(--cream)",
                }}
              >
                Визуальный
                <br />
                <em style={{ color: "var(--coral)" }}>мир</em>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3 font-golos text-xs tracking-widest uppercase"
              style={{ color: "var(--warm-gray)" }}>
              <Icon name="Images" size={16} />
              Моменты
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {/* Large item */}
            <div
              className="gallery-item row-span-2 relative overflow-hidden cursor-pointer group"
              style={{
                borderRadius: "4px",
                aspectRatio: "3/4",
              }}
            >
              <img
                src={galleryItems[0].src}
                alt={galleryItems[0].caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(18,15,10,0.8) 0%, transparent 60%)" }}
              >
                <span className="font-cormorant text-lg text-cream italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {galleryItems[0].caption}
                </span>
              </div>
            </div>

            {/* Other items */}
            {galleryItems.slice(1).map((item) => (
              <div
                key={item.id}
                className="gallery-item relative overflow-hidden cursor-pointer group"
                style={{ borderRadius: "4px", aspectRatio: "4/3" }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(18,15,10,0.8) 0%, transparent 60%)" }}
                >
                  <span className="font-cormorant text-base text-cream italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-10 overflow-hidden" style={{ borderTop: "1px solid rgba(232,133,106,0.1)", borderBottom: "1px solid rgba(232,133,106,0.1)" }}>
        <div className="animate-marquee flex whitespace-nowrap">
          {Array(8).fill("Эрикусик Трулялюсик").map((text, i) => (
            <span
              key={i}
              className="font-cormorant mx-10"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 300,
                fontStyle: i % 2 === 0 ? "italic" : "normal",
                color: i % 2 === 0 ? "var(--coral)" : "rgba(140,123,107,0.4)",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-12 px-6 text-center">
        <p
          className="font-cormorant italic text-lg mb-2"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--coral)" }}
        >
          Эрикусик Трулялюсик
        </p>
        <p className="font-golos text-xs tracking-widest uppercase" style={{ color: "var(--warm-gray)", letterSpacing: "0.2em" }}>
          Персональный сайт-визитка
        </p>
      </footer>
    </div>
  );
};

export default Index;
