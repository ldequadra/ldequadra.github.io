interface ButtonProps {
    appearance: string;
    href?: string;
    target?: string;
    iconBefore?: string;
    iconAfter?: string;
    children: any;
}

Button.defaultProps = {
    size: "regular"
}

function Button(props: ButtonProps, children: any) {

    /* Show icon BEFORE text or hide element */
    let buttonIconBeforeClass: string = '';
    if (props.iconBefore == undefined) {
        buttonIconBeforeClass = 'btn-noIconBefore'
    } else {
        buttonIconBeforeClass = props.iconBefore;
    }

    /* Show icon AFTER text or hide element */
    let buttonIconAfterClass: string = '';
    if (props.iconAfter == undefined) {
        buttonIconAfterClass = 'btn-noIconAfter'
    } else {
        buttonIconAfterClass = props.iconAfter;
    }


    return (
        <a
            href={props.href}
            target={props.target}
            className={`btn-${props.appearance}
                            flex flex-row items-center justify-center gap-2`}
        >
            <i className={`${props.iconBefore} ${buttonIconBeforeClass}`}></i>

            {`${props.children}`}

            <i className={`${props.iconAfter} ${buttonIconAfterClass}`}></i>
        </a>
    )
}

export default Button