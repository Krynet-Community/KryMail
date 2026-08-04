import { z } from "zod";

export const fileSchema = z.object({

  filename:
    z.string()
      .max(255),

  size:
    z.number()
      .max(50 * 1024 * 1024),

  mime:
    z.string()

});
