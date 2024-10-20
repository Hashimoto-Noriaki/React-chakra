import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};

export const PrimaryButton: VFC<Props> = (props) => {
    const { children } = props;  // デフォルトで false を設定
    return (
        <Button
            bg="teal.400"
            color="white"
            _hover={{ opacity: 0.8 }}
        >
            {children}
        </Button>
    );
};
