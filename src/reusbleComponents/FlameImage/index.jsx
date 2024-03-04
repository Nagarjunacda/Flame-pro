import Image from 'next/image';

const FlameImage = ({ src, alt }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width="0"
            height="0"
            sizes="100vw"
            objectFit="contain"
            className="h-100 w-100"
        />
    );
};

export default FlameImage;
