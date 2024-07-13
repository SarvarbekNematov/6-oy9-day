export const Inputs = ({
    placeholder,
    className,
    variant,
    type,
    id,
}) => {
    return (
        <input type={type} id={id} className={className + "input_once" + variant} placeholder={ placeholder} />
    )
}