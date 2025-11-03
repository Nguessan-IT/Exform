-- Fix security issues: Restrict access to contact and training registration data to admins only

-- Drop overly permissive policies for contacts_exform
DROP POLICY IF EXISTS "Only authenticated users can view contacts" ON public.contacts_exform;

-- Create admin-only SELECT policy for contacts_exform
CREATE POLICY "Only admins can view contacts"
ON public.contacts_exform
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Drop overly permissive policies for training_registrations_exform
DROP POLICY IF EXISTS "Only authenticated users can view contacts" ON public.training_registrations_exform;

-- Create admin-only SELECT policy for training_registrations_exform
CREATE POLICY "Only admins can view training registrations"
ON public.training_registrations_exform
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add admin management policies for contacts_exform
CREATE POLICY "Admins can update contacts"
ON public.contacts_exform
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete contacts"
ON public.contacts_exform
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add admin management policies for training_registrations_exform
CREATE POLICY "Admins can update training registrations"
ON public.training_registrations_exform
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete training registrations"
ON public.training_registrations_exform
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));