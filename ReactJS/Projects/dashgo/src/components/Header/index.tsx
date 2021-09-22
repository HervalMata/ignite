import {Avatar, Box, Flex, HStack, Icon, Input, Text, useBreakpointValue} from "@chakra-ui/react";
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from "react-icons/ri";
import {Logo} from "./Logo";
import {NotificationsNav} from "./NotificationsNav";
import {Profile} from "./Profile";
import {Searchbox} from "./Searchbox";

export function Header() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    return (
        <Flex
            as='header' w='100%' maxWidth={1480}
            h="28" marginX='auto' mt='4' px='6' align='center'>
            <Logo />
            {isWideVersion &&  <Searchbox/>}
            <Flex align='center' ml='auto'>
                <NotificationsNav />
                <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    )
}