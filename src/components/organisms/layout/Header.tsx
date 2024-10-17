import { Box,Flex,Heading,Link,IconButton } from "@chakra-ui/react";
import { memo,VFC } from "react"
import { HamburgerIcon } from "@chakra-ui/icons" 

export const Header: VFC = memo(() => {
    return (
        <Flex
            as="nav"
            bg="teal.500"
            color="gray.50"
            align="center"
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height={{ base: "80px", md: "80px" }} // レスポンシブに高さを調整
            padding={{ base: 3, md: 5 }}
            zIndex={1} // ヘッダーが常に最前面に表示されるように
        >

        <Heading as = "h1" fontSize={{ base: "md", md: "lg" }}> 
            ユーザー管理アプリ
        </Heading>
        <Flex 
            align="center" 
            fontSize="sm" 
            flexGrow={2} 
            display={{ base:"none",md:"flex" }}
            >
            <Box pr={4}>
                <Link>ユーザー一覧</Link>      
            </Box>
            <Link>設定</Link>
        </Flex>
        <IconButton
            aria-label="メニューボタン"
            icon={<HamburgerIcon/>} 
            size="sm" 
            variant="unstyled" 
            display={{ base: "block",md:"none" }}
            // onClick={onOpen}
        />
    </Flex>
    )
});