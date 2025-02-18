import {Box} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import {Header} from "./Header.tsx";
import Footer from "./Footer.tsx";

export default function Layout() {
    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <Header />
            <Box as="main" flex={1}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
}