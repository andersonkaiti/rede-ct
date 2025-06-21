import { Button } from "@components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui/dialog";
import { Label } from "@components/ui/label";
import {
  PageForm,
  PageFormContent,
  PageFormContentField,
} from "@components/ui/page-container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

import { SelectMember } from "../../../_components/select-member";

interface ICreateInMemoriamFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

export function CreateInMemoriamForm({}: ICreateInMemoriamFormProps) {
  const inMemoriamTypes = [
    {
      label: "Pesquisador",
      value: "researcher",
    },
    {
      label: "Líder",
      value: "leader",
    },
  ];

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cadastrar In Memoriam</DialogTitle>
      </DialogHeader>

      <DialogContent>
        <PageForm>
          <PageFormContent>
            <PageFormContentField>
              <Label>Usuários</Label>

              <SelectMember />
            </PageFormContentField>

            <PageFormContentField>
              <Label>Tipo</Label>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>

                <SelectContent>
                  {inMemoriamTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </PageFormContentField>
          </PageFormContent>
        </PageForm>

        <DialogFooter>
          <Button type="submit">Cadastrar In Memoriam</Button>
        </DialogFooter>
      </DialogContent>
    </DialogContent>
  );
}
