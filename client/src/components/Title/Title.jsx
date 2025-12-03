
const Title = ({title, subtitile, align, font}) => {
    return (
        <div className={`flex flex-col justify-center items-center text-center md:my-14 my-4 ${align === 'center' && "md:items-center md:text-center"}`}>
            <h1 className={`text-4xl md:text-[40px]  ${font || "font-playfair"}`}>{title}</h1>
            <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-7xl">{subtitile}</p>
        </div>
    );
};

export default Title;