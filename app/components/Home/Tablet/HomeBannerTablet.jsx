export default function HomeBannerTablet({ children }) {
    return (
        <section className="py-24 flex flex-col items-center text-center">
            <div className="max-w-[80%]">{children}</div>
        </section>
    );
}
