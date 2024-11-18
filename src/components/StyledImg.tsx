"use client";

// 이미지를 삽입해야 할 때 이 컴포넌트를 활용

interface StyledImgProps {
    $width?: string;
    $height?: string;
    $margin?: string;
    $padding?: string;
    $borderradius?: string;
    $border?: string;
    $cursor?: string;
    $alignSelf?: string;
}

const StyledImg: React.FC<React.ImgHTMLAttributes<HTMLImageElement> & StyledImgProps> = ({
    $width = "auto",
    $height = "auto",
    $margin = "0",
    $padding = "0",
    $borderradius = "0",
    $border = "none",
    $cursor = "auto",
    $alignSelf = "auto",
    ...props
}) => {
    return (
        <img
            style={{
                width: $width,
                height: $height,
                margin: $margin,
                padding: $padding,
                borderRadius: $borderradius,
                border: $border,
                cursor: $cursor,
                alignSelf: $alignSelf,
            }}
            {...props}
        />
    );
};

export default StyledImg;
