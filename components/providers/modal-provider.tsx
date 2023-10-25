"use client"

import { useState, useEffect } from "react";

import { CreateServerModel } from "@/components/modals/create-server-model"
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerModel } from "@/components/modals/edit-server-model";
import { MembersModal } from "@/components/modals/members-modal";


export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <>
            <CreateServerModel />
            <InviteModal />
            <EditServerModel />
            <MembersModal />
        </>
    );
}