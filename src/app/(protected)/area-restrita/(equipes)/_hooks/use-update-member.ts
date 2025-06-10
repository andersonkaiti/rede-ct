"use client";

import { updateTeamMember } from "@actions/team/update";
import { useQueryClient } from "@tanstack/react-query";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

interface IUseRegisterMemberProps {
  setIsOpen: (isOpen: boolean) => void;
  type: string;
  user: {
    id: string;
  };
}

export function useUpdateMember({
  setIsOpen,
  type,
  user,
}: IUseRegisterMemberProps) {
  const queryClient = useQueryClient();

  const [state, formAction, isLoading] = useActionState(
    updateTeamMember.bind(null, {
      team: {
        type,
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
