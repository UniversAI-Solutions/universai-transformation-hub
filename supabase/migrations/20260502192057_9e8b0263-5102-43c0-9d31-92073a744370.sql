CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  website TEXT,
  role TEXT,
  company_size TEXT,
  budget TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public to insert (form submissions); reads restricted (no select policy = no public reads).
CREATE POLICY "Anyone can submit an inquiry"
ON public.inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);