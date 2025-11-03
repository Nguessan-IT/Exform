-- Table pour les messages de contact
CREATE TABLE public.contacts_exform (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on contacts_exform
ALTER TABLE public.contacts_exform ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert contacts
CREATE POLICY "Allow public to insert contacts"
ON public.contacts_exform
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Only authenticated users can view contacts
CREATE POLICY "Only authenticated users can view contacts"
ON public.contacts_exform
FOR SELECT
TO authenticated
USING (true);

-- Table pour les inscriptions aux formations
CREATE TABLE public.training_registrations_exform (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  training_name TEXT NOT NULL,
  profession TEXT NOT NULL,
  referral_source TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on training_registrations_exform
ALTER TABLE public.training_registrations_exform ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert training registrations
CREATE POLICY "Allow public to insert training registrations"
ON public.training_registrations_exform
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Only authenticated users can view training registrations
CREATE POLICY "Only authenticated users can view training registrations"
ON public.training_registrations_exform
FOR SELECT
TO authenticated
USING (true);

-- Create trigger for updated_at on contacts_exform
CREATE TRIGGER update_contacts_exform_updated_at
BEFORE UPDATE ON public.contacts_exform
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Create trigger for updated_at on training_registrations_exform
CREATE TRIGGER update_training_registrations_exform_updated_at
BEFORE UPDATE ON public.training_registrations_exform
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();