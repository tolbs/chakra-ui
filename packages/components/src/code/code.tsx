import { ThemingProps, omitThemingProps } from "@chakra-ui/styled-system"
import { HTMLChakraProps, chakra, forwardRef, useStyleConfig } from "../system"
import { cx } from "@chakra-ui/utils/cx"

export interface CodeProps
  extends HTMLChakraProps<"code">,
    ThemingProps<"Code"> {}

/**
 * React component to render inline code snippets.
 *
 * @see Docs https://chakra-ui.com/code
 */
export const Code = forwardRef<CodeProps, "code">(function Code(props, ref) {
  const styles = useStyleConfig("Code", props)
  const { className, ...rest } = omitThemingProps(props)

  return (
    <chakra.code
      ref={ref}
      className={cx("chakra-code", props.className)}
      {...rest}
      __css={{
        display: "inline-block",
        ...styles,
      }}
    />
  )
})

Code.displayName = "Code"
