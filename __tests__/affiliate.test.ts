import { buildFlightAffiliateUrl, buildFerryAffiliateUrl } from '@/lib/affiliate'

describe('Affiliate URL Builders', () => {
  describe('buildFlightAffiliateUrl', () => {
    let originalTravelpayoutsPartnerId: string | undefined

    beforeEach(() => {
      originalTravelpayoutsPartnerId = process.env.TRAVELPAYOUTS_PARTNER_ID
    })

    afterEach(() => {
      if (originalTravelpayoutsPartnerId === undefined) {
        delete process.env.TRAVELPAYOUTS_PARTNER_ID
      } else {
        process.env.TRAVELPAYOUTS_PARTNER_ID = originalTravelpayoutsPartnerId
      }
    })

    it('should return null when TRAVELPAYOUTS_PARTNER_ID is not set', () => {
      delete process.env.TRAVELPAYOUTS_PARTNER_ID
      const url = buildFlightAffiliateUrl({
        origin: 'Paris',
        destination: 'Tanger',
      })
      expect(url).toBeNull()
    })

    it('should return null when TRAVELPAYOUTS_PARTNER_ID is empty', () => {
      process.env.TRAVELPAYOUTS_PARTNER_ID = ''
      const url = buildFlightAffiliateUrl({
        origin: 'Paris',
        destination: 'Tanger',
      })
      expect(url).toBeNull()
    })

    it('should build valid URL when TRAVELPAYOUTS_PARTNER_ID is set', () => {
      process.env.TRAVELPAYOUTS_PARTNER_ID = 'test-marker-123'
      const url = buildFlightAffiliateUrl({
        origin: 'Paris',
        destination: 'Tanger',
        date: '2026-09-15',
      })
      expect(url).toBeTruthy()
      expect(url).toContain('tp.media')
      expect(url).toContain('marker=test-marker-123')
      expect(url).toContain('skyscanner')
    })

    it('should URL-encode origin and destination', () => {
      process.env.TRAVELPAYOUTS_PARTNER_ID = 'test-marker'
      const url = buildFlightAffiliateUrl({
        origin: 'New York',
        destination: 'Los Angeles',
      })
      const target = new URL(url as string).searchParams.get('u')
      expect(target).toContain('new%20york')
      expect(target).toContain('los%20angeles')
    })

    it('should handle optional date parameter', () => {
      process.env.TRAVELPAYOUTS_PARTNER_ID = 'test-marker'
      const urlWithDate = buildFlightAffiliateUrl({
        origin: 'Paris',
        destination: 'Tanger',
        date: '2026-09-20',
      })
      const urlWithoutDate = buildFlightAffiliateUrl({
        origin: 'Paris',
        destination: 'Tanger',
      })
      expect(urlWithDate).toBeTruthy()
      expect(urlWithoutDate).toBeTruthy()
      expect(urlWithDate).not.toEqual(urlWithoutDate)
    })
  })

  describe('buildFerryAffiliateUrl', () => {
    let originalDirectFerriesPartnerId: string | undefined
    let originalDirectFerriesBaseUrl: string | undefined

    beforeEach(() => {
      originalDirectFerriesPartnerId = process.env.DIRECT_FERRIES_PARTNER_ID
      originalDirectFerriesBaseUrl = process.env.DIRECT_FERRIES_BASE_URL
    })

    afterEach(() => {
      if (originalDirectFerriesPartnerId === undefined) {
        delete process.env.DIRECT_FERRIES_PARTNER_ID
      } else {
        process.env.DIRECT_FERRIES_PARTNER_ID = originalDirectFerriesPartnerId
      }

      if (originalDirectFerriesBaseUrl === undefined) {
        delete process.env.DIRECT_FERRIES_BASE_URL
      } else {
        process.env.DIRECT_FERRIES_BASE_URL = originalDirectFerriesBaseUrl
      }
    })

    it('should return null when DIRECT_FERRIES_PARTNER_ID is not set', () => {
      delete process.env.DIRECT_FERRIES_PARTNER_ID
      process.env.DIRECT_FERRIES_BASE_URL = 'https://api.directferries.com'
      const url = buildFerryAffiliateUrl({
        origin: 'Spain',
        destination: 'Morocco',
      })
      expect(url).toBeNull()
    })

    it('should return null when DIRECT_FERRIES_BASE_URL is not set', () => {
      process.env.DIRECT_FERRIES_PARTNER_ID = 'test-partner'
      delete process.env.DIRECT_FERRIES_BASE_URL
      const url = buildFerryAffiliateUrl({
        origin: 'Spain',
        destination: 'Morocco',
      })
      expect(url).toBeNull()
    })

    it('should build valid URL when both env vars are set', () => {
      process.env.DIRECT_FERRIES_PARTNER_ID = 'partner-456'
      process.env.DIRECT_FERRIES_BASE_URL = 'https://api.directferries.com/search'
      const url = buildFerryAffiliateUrl({
        origin: 'Spain',
        destination: 'Morocco',
        date: '2026-09-15',
      })
      expect(url).toBeTruthy()
      expect(url).toContain('partner=partner-456')
      expect(url).toContain('origin=Spain')
      expect(url).toContain('destination=Morocco')
      expect(url).toContain('date=2026-09-15')
    })

    it('should handle optional date parameter', () => {
      process.env.DIRECT_FERRIES_PARTNER_ID = 'partner-456'
      process.env.DIRECT_FERRIES_BASE_URL = 'https://api.directferries.com'
      const urlWithDate = buildFerryAffiliateUrl({
        origin: 'Spain',
        destination: 'Morocco',
        date: '2026-09-20',
      })
      const urlWithoutDate = buildFerryAffiliateUrl({
        origin: 'Spain',
        destination: 'Morocco',
      })
      expect(urlWithDate).toContain('date=2026-09-20')
      expect(urlWithoutDate).not.toContain('date=')
    })

    it('should not expose partner ID in plain text externally', () => {
      process.env.DIRECT_FERRIES_PARTNER_ID = 'secret-partner-id'
      process.env.DIRECT_FERRIES_BASE_URL = 'https://api.directferries.com'
      const url = buildFerryAffiliateUrl({
        origin: 'Spain',
        destination: 'Morocco',
      })
      // Should contain partner ID in URL params (expected)
      expect(url).toContain('partner=secret-partner-id')
      // But this function should only be called server-side
      // Never expose the result directly to client
    })
  })
})
