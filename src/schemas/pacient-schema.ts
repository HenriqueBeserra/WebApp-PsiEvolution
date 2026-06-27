import z from "zod";

// Aligned with API: Psievolution createPacientBodySchema + PacientSchema (nome min 3, whats 10+ digits)
export const pacientSchema = z.object({
    userName: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    userAge: z.string().min(1, { message: "Idade obrigatória" }).refine((val) => !Number.isNaN(Number(val)) && Number(val) >= 0, { message: "Idade inválida" }),
    userEmail: z.string().min(1, { message: "Email é obrigatório" }),
    userWhats: z.string().min(1, { message: "Contato é obrigatório" }).refine((v) => v.replace(/\D/g, '').length >= 10, { message: "WhatsApp deve ter pelo menos 10 dígitos" }),
    userResponsavel: z.string().optional(),
    userContatoResponsavel: z.string().optional()
})