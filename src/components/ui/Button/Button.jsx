import PropTypes from "prop-types"
import { cva } from "class-variance-authority"
import { cn } from "../../../utils/cn" 

const buttonVariants = cva(
    "inline-flex items-center justify-center cursor-pointer transition-all duration-300",
    {
        variants: {
            variant: {
                default:
                    "border-2 border-outline rounded-xs font-bold rounded-full hover:shadow-[4px_4px_0px_hsl(0,0%,7%,1)]",
                filled:
                    "bg-outline text-brand-white rounded-xs hover:bg-outline/95",
                icon:
                    "border border-gray-1 rounded-full hover:bg-gray-3",
            },
            size: {
                sm: "p-2",
                md: "py-2 px-3",
                lg: "py-3 px-8",
                xl: "py-4 w-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
)

const Button = ({ className, variant = "default", size = "md", children, ...props }) => {
    return (
        <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(["default", "filled", "icon"]),
    size: PropTypes.oneOf(["sm", "md", "lg"], "xl"),
    children: PropTypes.node,
}

export default Button