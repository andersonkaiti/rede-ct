import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    await api.delete(`${BASE_URL}/news/${params.id}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar notícia" },
      { status: 500 },
    );
  }
}
