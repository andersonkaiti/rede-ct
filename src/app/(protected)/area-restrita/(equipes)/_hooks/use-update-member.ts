"use client";

import { updateTeamMember } from "@actions/team/update";
import { useQueryClient } from "@tanstack/react-query";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { useTeam } from "./use-team.hook";

interface IUseRegisterMemberProps {
  setIsOpen: (isOpen: boolean) => void;
  name: string;
  type: string;
  user: {
    id: string;
  };
}

export function useUpdateMember({
  setIsOpen,
  name,
  type,
  user,
}: IUseRegisterMemberProps) {
  const queryClient = useQueryClient();

  const { data: team } = useTeam({
    type,
  });

  const [state, formAction, isLoading] = useActionState(
    updateTeamMember.bind(null, {
      team: {
        name,
        type,
        id: team?.[0]?.id,
      },
      user: {
        id: user.id,
      },
    }),
    null,
  );

  useEffect(() => {
    if (state && "success" in state) {
      setIsOpen(false);

      queryClient.invalidateQueries({
        queryKey: ["team", type],
      });

      toast.success("Membro atualizado com sucesso");
    }
  }, [state, setIsOpen, queryClient, type]);

  return {
    state,
    formAction,
    isLoading,
  };
}
