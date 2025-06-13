"use client";

import { createTeamMember } from "@actions/team/create";
import { useQueryClient } from "@tanstack/react-query";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { useTeam } from "./use-team.hook";

interface IUseCreateMemberProps {
  setIsOpen: (isOpen: boolean) => void;
  name: string;
  type: string;
}

export function useCreateMember({
  setIsOpen,
  name,
  type,
}: IUseCreateMemberProps) {
  const queryClient = useQueryClient();

  const { data: team } = useTeam({
    type,
  });

  const [state, formAction, isLoading] = useActionState(
    createTeamMember.bind(null, {
      name,
      type,
      id: team?.[0]?.id,
    }),
    null,
  );

  useEffect(() => {
    if (state && "success" in state) {
      setIsOpen(false);

      queryClient.invalidateQueries({
        queryKey: ["team", type],
      });

      toast.success("Membro cadastrado com sucesso");
    }
  }, [state, setIsOpen, queryClient, type]);

  return {
    state,
    formAction,
    isLoading,
  };
}
