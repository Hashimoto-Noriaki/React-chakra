import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
};

export const PrimaryButton: VFC<Props> = (props) => {
    const { children, disabled = false, loading = false, onClick } = props;  // デフォルトで false を設定
    return (
        <Button
            bg="teal.400"
            color="white"
            _hover={{ opacity: 0.8 }}
            disabled={disabled || loading} // disabled の場合も true にする
            isLoading={loading} // loading の値を isLoading に反映
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
