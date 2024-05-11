import { usePageTitle } from "../../utils/usePageTitle/usePageTitle.ts";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { useUserData, useUserDataCreate } from "@/app/api/user/queryHooks.ts";
import { useAuth0 } from "@auth0/auth0-react";
import { Input } from "@/components/ui/input.tsx";
import Drawer from "@/app/components/Drawer/Drawer.tsx";
import {
  PROFILE_DRAWER_DESCRIPTION,
  PROFILE_DRAWER_NAME_PLACEHOLDER,
  PROFILE_DRAWER_NICKNAME_PLACEHOLDER,
  PROFILE_DRAWER_SURNAME_PLACEHOLDER,
  PROFILE_DRAWER_TITLE,
  PROFILE_DRAWER_TRIGGER_TEXT,
} from "@/app/pages/ProfilePage/constants.ts";

const ProfilePage = () => {
  usePageTitle("Profile page");

  const { user } = useAuth0();

  const { data, isLoading } = useUserData(user?.sub ?? "");
  const { mutateUserDataCreate } = useUserDataCreate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nickname, setNickname] = useState("");

  const handleUserDataCreate = () => {
    const newData = {
      id: user?.sub ?? "",
      nickname,
      name,
      surname,
    };

    mutateUserDataCreate({
      data: newData,
      onSettled: () => {},
    });
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      <div className={"grid grid-cols-2"}>
        <div>
          <p className="leading-7">Name</p>
        </div>
        <div>
          <p className="leading-7 font-semibold">{data?.name ?? ""}</p>
        </div>

        <div>
          <p className="leading-7">Surname</p>
        </div>
        <div>
          <p className="leading-7 font-semibold">{data?.surname ?? ""}</p>
        </div>

        <div>
          <p className="leading-7">Nickname</p>
        </div>
        <div>
          <p className="leading-7 font-semibold">{data?.nickname ?? ""}</p>
        </div>
      </div>

      <Drawer
        triggerIcon={<CirclePlus className="mr-2 h-4 w-4" />}
        triggerText={PROFILE_DRAWER_TRIGGER_TEXT}
        title={PROFILE_DRAWER_TITLE}
        description={PROFILE_DRAWER_DESCRIPTION}
        drawerContent={
          <>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={PROFILE_DRAWER_NAME_PLACEHOLDER}
            />

            <Input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder={PROFILE_DRAWER_SURNAME_PLACEHOLDER}
            />

            <Input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder={PROFILE_DRAWER_NICKNAME_PLACEHOLDER}
            />
          </>
        }
        onSubmit={handleUserDataCreate}
      />
    </>
  );
};

export default ProfilePage;
