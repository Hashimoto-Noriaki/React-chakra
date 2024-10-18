import { Box,Flex,Heading,Link, useDisclosure } from "@chakra-ui/react";
import { memo,VFC } from "react"
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    const {isOpen,onOpen,onClose} = useDisclosure();
    return (
        <>
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
        <MenuIconButton onOpen={onOpen}/>
    </Flex>
    <MenuDrawer onClose={onClose} isOpen={isOpen}/>
    </>
    )
});
