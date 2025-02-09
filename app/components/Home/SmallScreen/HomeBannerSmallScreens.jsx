export default function HomeBannerSmallScreen({ children }) {
    return (
        <section className="py-32 flex items-center justify-center">
            <div className="max-w-[70%]">{children}</div>
        </section>
    );
}