<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" version="1.1.0" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc" xmlns:se="http://www.opengis.net/se" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <se:Name>distrito_ancon</se:Name>
    <UserStyle>
      <se:Name>distrito_ancon</se:Name>
      <se:FeatureTypeStyle>
        <se:Rule>
          <se:Name>Single symbol</se:Name>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:SvgParameter name="fill">#a3cdb9</se:SvgParameter>
            </se:Fill>
          </se:PolygonSymbolizer>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:GraphicFill>
                <se:Graphic>
                  <se:Mark>
                    <se:WellKnownName>line</se:WellKnownName>
                    <se:Fill>
                      <se:SvgParameter name="fill">#ff0000</se:SvgParameter>
                    </se:Fill>
                    <se:Stroke>
                      <se:SvgParameter name="stroke">#6f9bcc</se:SvgParameter>
                      <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                    </se:Stroke>
                  </se:Mark>
                  <se:Size>8</se:Size>
                  <se:Rotation>
                    <ogc:Literal>90</ogc:Literal>
                  </se:Rotation>
                  <se:Displacement>
                    <se:DisplacementX>3</se:DisplacementX>
                    <se:DisplacementY>5</se:DisplacementY>
                  </se:Displacement>
                </se:Graphic>
              </se:GraphicFill>
            </se:Fill>
            <se:VendorOption name="distance">41,24</se:VendorOption>
          </se:PolygonSymbolizer>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:GraphicFill>
                <se:Graphic>
                  <se:Mark>
                    <se:WellKnownName>line</se:WellKnownName>
                    <se:Fill>
                      <se:SvgParameter name="fill">#ff0000</se:SvgParameter>
                    </se:Fill>
                    <se:Stroke>
                      <se:SvgParameter name="stroke">#6f9bcc</se:SvgParameter>
                      <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                    </se:Stroke>
                  </se:Mark>
                  <se:Size>14</se:Size>
                  <se:Rotation>
                    <ogc:Literal>90</ogc:Literal>
                  </se:Rotation>
                </se:Graphic>
              </se:GraphicFill>
            </se:Fill>
            <se:VendorOption name="distance">41,24</se:VendorOption>
          </se:PolygonSymbolizer>
          <se:PolygonSymbolizer>
            <se:Fill>
              <se:GraphicFill>
                <se:Graphic>
                  <se:Mark>
                    <se:WellKnownName>line</se:WellKnownName>
                    <se:Fill>
                      <se:SvgParameter name="fill">#ff0000</se:SvgParameter>
                    </se:Fill>
                    <se:Stroke>
                      <se:SvgParameter name="stroke">#6f9bcc</se:SvgParameter>
                      <se:SvgParameter name="stroke-width">1</se:SvgParameter>
                    </se:Stroke>
                  </se:Mark>
                  <se:Size>14</se:Size>
                  <se:Rotation>
                    <ogc:Literal>90</ogc:Literal>
                  </se:Rotation>
                  <se:Displacement>
                    <se:DisplacementX>-3</se:DisplacementX>
                    <se:DisplacementY>6</se:DisplacementY>
                  </se:Displacement>
                </se:Graphic>
              </se:GraphicFill>
            </se:Fill>
            <se:VendorOption name="distance">41,24</se:VendorOption>
          </se:PolygonSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:TextSymbolizer>
            <se:Label>
              <ogc:PropertyName>DISTRITO</ogc:PropertyName>
            </se:Label>
            <se:Font>
              <se:SvgParameter name="font-family">Bodoni MT Black</se:SvgParameter>
              <se:SvgParameter name="font-size">13</se:SvgParameter>
            </se:Font>
            <se:LabelPlacement>
              <se:PointPlacement>
                <se:AnchorPoint>
                  <se:AnchorPointX>0</se:AnchorPointX>
                  <se:AnchorPointY>0.5</se:AnchorPointY>
                </se:AnchorPoint>
              </se:PointPlacement>
            </se:LabelPlacement>
            <se:Halo>
              <se:Radius>2</se:Radius>
              <se:Fill>
                <se:SvgParameter name="fill">#fafafa</se:SvgParameter>
              </se:Fill>
            </se:Halo>
            <se:Fill>
              <se:SvgParameter name="fill">#323232</se:SvgParameter>
            </se:Fill>
            <se:VendorOption name="maxDisplacement">1</se:VendorOption>
          </se:TextSymbolizer>
        </se:Rule>
      </se:FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
