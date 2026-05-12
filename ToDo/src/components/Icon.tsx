import React from "react";
import {cva, type VariantProps} from "class-variance-authority"

const iconVariants = cva("", {  // Sem export para evitar que o Fast Refresh (HMR) do Vite recarregue o arquivo inteiro em vez de apenas o componente.
    variants: {
        animate: {
        true: "animate-spin",
        false: "",
        }    
    },
    defaultVariants: {
        animate: false
    }
})

interface IconProps
    extends React.ComponentProps<"svg">, 
        VariantProps<typeof iconVariants> {
    svg: React.ElementType; // ElementType é mais flexível e moderno que React.FC, aceitando tanto tags HTML quanto componentes.
}

export default function Icon ({
    svg: SvgComponent, 
    animate, 
    className, 
    ...props
}: IconProps) {
    return <SvgComponent className={ iconVariants({ animate, className}) } {...props} />
}