import z from "zod";

export const documentFileSchema = z.object({
  id: z.string(),
  file: z.instanceof(File),
});

export const documentsSchema = z.object({
  files: z.array(documentFileSchema),
});

export type DocumentFile = z.infer<typeof documentFileSchema>;
export type Documents = z.infer<typeof documentsSchema>;
