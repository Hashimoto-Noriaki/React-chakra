import { memo,VFC } from "react"
import { Box,Button,Divider,Flex,Heading,Input } from "@chakra-ui/react";

export const Login: VFC = memo(() => {
    return (
        <Flex>
            <Box>
                <Heading as="h1">ユーザー管理アプリ</Heading>
                <Divider />
                <Input placeholder="ユーザーID"/>
                <Button>ログイン</Button>
            </Box>
        </Flex>
    )
});