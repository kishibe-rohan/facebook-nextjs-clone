import {
  ChevronDownIcon,
  ArchiveIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w:[600px] xl:min-w:[300px]">
      <SidebarRow
        src="https://pbs.twimg.com/media/EWF7yULUcAIZ9Wo.jpg"
        title="Kishibe Rohan"
      />
      <SidebarRow Icon={UsersIcon} title="Find Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ArchiveIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
