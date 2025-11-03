-- Add missing columns to training_registrations_exform table for complete registration data

ALTER TABLE public.training_registrations_exform
ADD COLUMN IF NOT EXISTS company TEXT,
ADD COLUMN IF NOT EXISTS position TEXT,
ADD COLUMN IF NOT EXISTS experience_level TEXT,
ADD COLUMN IF NOT EXISTS preferred_training TEXT,
ADD COLUMN IF NOT EXISTS start_date TEXT,
ADD COLUMN IF NOT EXISTS motivation TEXT;

-- Update existing profession column name to position for clarity (optional, keeping both for backward compatibility)
-- Rename referral_source to a more descriptive name
COMMENT ON COLUMN public.training_registrations_exform.profession IS 'Legacy field, use position instead';
COMMENT ON COLUMN public.training_registrations_exform.referral_source IS 'How the user heard about the training';
COMMENT ON COLUMN public.training_registrations_exform.training_name IS 'Legacy field, use preferred_training instead';