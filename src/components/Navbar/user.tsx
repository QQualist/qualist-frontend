import { UserContext } from "@/contexts/user";
import { ContextUser } from "@/types/ContextUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContext } from "react";

const User = () => {
  const { user } = useContext(UserContext) as ContextUser;

  return (
    <div className="flex w-max h-max items-center gap-4">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt={`Profile picture of ${user?.name} ${user?.surname}`}
        />
        <AvatarFallback>
          <span>
            {user?.name[0]}
            {user?.surname[0]}
          </span>
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-40">
        <span className="text-white text-base truncate">
          {user?.name} {user?.surname.split(" ")[0]}
        </span>
        <span className="text-white text-xs truncate">{user?.email}</span>
      </div>
    </div>
  );
};

export default User;
