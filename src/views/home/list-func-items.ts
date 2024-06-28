import { ElementType } from "react";
import { GoChecklist } from "react-icons/go";
import { RiTeamLine, RiDashboardLine  } from "react-icons/ri";
import { AiOutlineAudit } from "react-icons/ai";
import { LuFileWarning } from "react-icons/lu";
import { BsShieldCheck } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

interface IListFuncItems {
    text: string;
    description: string;
    icon: ElementType;
}

export const ListFuncItems: IListFuncItems[] = 
[

    {
        text: 'Custom Checklists',
        description: 'Create custom checklists for each type of audit.',
        icon: GoChecklist,
    },

    {
        text: 'Team Management',
        description: "Create departments, roles, assign permissions, and manage each member's access.",
        icon: RiTeamLine,
    },

    {
        text: 'Audits',
        description: 'Realize software quality audits simply and efficiently.',
        icon: AiOutlineAudit,
    },

    {
        text: 'Unconformities',
        description: 'Register and manage nonconformities identified during audits.',
        icon: LuFileWarning,
    },

    {
        text: 'Dashboard',
        description: 'Track audit performance and view complete and intuitive reports.',
        icon: RiDashboardLine,
    },

    {
        text: 'Risk Management',
        description: 'Identify, assess, and manage risks associated with the software quality process.',
        icon: BsShieldCheck,
    },

    {
        text: 'Notifications',
        description: 'Receive real-time notifications about the status of audits and nonconformities.',
        icon: IoMdNotificationsOutline,
    }

];